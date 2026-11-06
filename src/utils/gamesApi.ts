import { type Game } from "../type/Game";

const BASE_URL = 'https://6aa29578ccb3db9689a6ba71.mockapi.io/api/gamestore';

export type GamesError = {
    type: 'network_error' | 'not_found' | 'http_error' | 'invalid_response';
    message: string;
}

export type GamesResult = 
    | {data: Game[]; error: null}
    | {data: null; error: GamesError};

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isSystemRequirements(value: unknown): value is Game['minimum_requirements'] {
    return isRecord(value) &&
        typeof value.OS === 'string' &&
        typeof value.PROCESSOR === 'string' &&
        typeof value.MEMORY === 'string' &&
        typeof value.GRAPHICS === 'string' &&
        typeof value.DIRECTX === 'string' &&
        typeof value.STORAGE === 'string';
}

function isGame(value: unknown): value is Game {
    return isRecord(value) &&
        typeof value.appID === 'number' &&
        typeof value.name === 'string' &&
        typeof value.slug === 'string' &&
        typeof value.isFeatured === 'boolean' &&
        typeof value.release_date === 'string' &&
        typeof value.required_age === 'string' &&
        typeof value.price === 'number' &&
        typeof value.detailed_description === 'string' &&
        typeof value.short_description === 'string' &&
        isSystemRequirements(value.minimum_requirements) &&
        isSystemRequirements(value.recommended_requirements) &&
        typeof value.supported_languages === 'string' &&
        typeof value.full_audio_languages === 'string' &&
        typeof value.reviews === 'string' &&
        typeof value.header_image === 'string' &&
        typeof value.notes === 'string' &&
        typeof value.developers === 'string' &&
        typeof value.publishers === 'string' &&
        typeof value.genres === 'string' &&
        typeof value.screenshots === 'string' &&
        typeof value.categories === 'string';
}

function isGameArray(value: unknown): value is Game[] {
    return Array.isArray(value) && value.every(isGame);
}


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

        if(!isGameArray(data)) {
            return {
                data: null,
                error: {type: 'invalid_response', message: 'Server returned an invalid response'}
            };
        }

        return {data, error: null};

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