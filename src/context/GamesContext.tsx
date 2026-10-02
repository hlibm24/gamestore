import { createContext, useContext, useCallback, useMemo, type ReactNode } from 'react';
import {type Game} from '../type/Game';

type GamesContextValue = {
    games: Game[];
    searchGames: (query: string) => Game[];
};

const GamesContext = createContext<GamesContextValue | null>(null);

export const GamesProvider = ({games, children}: {games: Game[], children: ReactNode}) => {
    const searchGames = useCallback(
        (query: string) => {
            const q = query.trim().toLocaleLowerCase();
            if(!q) return [];
            return games.filter((g)=> g.name.toLowerCase().includes(q));
        },[games]
    );

    const value = useMemo(()=> ({games, searchGames}), [games, searchGames]);

    return <GamesContext.Provider value={value}>{children}</GamesContext.Provider>
}

export const useGamesContext = () => {
    const context = useContext(GamesContext);
    if(!context) throw new Error ('useGamesContext must be used inside GamesProvider');
    return context;
}