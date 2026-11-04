import { type Game } from "../type/Game";

const BASE_URL = 'https://6aa29578ccb3db9689a6ba71.mockapi.io/api/gamestore';

export type GamesError = {
    type: 'network_error' | 'not_found' | 'http_error' | 'invalid_response';
    message: string;
}

export type GamesResult = 
    | {data: Game[]; error: null}
    | {data: null; error: GamesError};


export async function fetchGames(signal?: AbortSignal): Promise<GamesResult> {
    try {
        const res = await fetch(`${BASE_URL}/games`, {signal});

        if(res.status === 404) {
            return {data: null,
                error: {type: 'not_found', message: 'Games are not found'}};
        }

        if(!res.ok) {
            return {
                data: null, 
                error: {type: 'http_error', message: `Server error: ${res.status}`}
            }
        }

        let data: unknown;
        try {
            data = await res.json();
        } catch(err) {
            if(err instanceof DOMException && err.name === 'AbortError') {
                throw err;
            }
            return {
                data: null,
                error: {type: 'invalid_response', message: 'Server returned an invalid response'}
            };
        }

        if(!Array.isArray(data)) {
            return {
                data: null,
                error: {type: 'invalid_response', message: 'Server returned an invalid response'}
            };
        }

        return {data: data as Game[], error: null};

    } catch(err) {
        if(err instanceof DOMException && err.name === 'AbortError') {
            throw err;
        }
        return {
            data: null,
            error: {type: 'network_error', message: 'No internet connection'}
        }
    }
}