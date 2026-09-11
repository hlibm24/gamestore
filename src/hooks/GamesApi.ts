import { type Game } from "../type/Game";

const BASE_URL = 'https://6aa29578ccb3db9689a6ba71.mockapi.io/api/gamestore';

export type GamesError = {
    type: 'network_error' | 'not_found' | 'http_error';
    message: string;
}

export type GamesResult = 
    | {data: Game[]; error: null}
    | {data: null; error: GamesError};


export async function fetchGames(): Promise<GamesResult> {
    try {
        const res = await fetch(`${BASE_URL}/games`);

        if(res.status === 404) {
            return {data: null,
                error: {type: 'not_found', message: 'Games are not found'}};
        }

        if(!res.ok) {
            return {
                data: null, 
                error: {type: 'http_error', message: `Server error: ${res.status} `}
            }
        }

        const data: Game[] = await res.json();
        return {data, error: null};
    } catch {
        return {
            data: null,
            error: {type: 'network_error', message: 'No internet connection'}
        }
    }
}