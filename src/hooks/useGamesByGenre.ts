import {useMemo} from 'react';
import {type Game} from '../type/Game';

export const useGamesByGenre = (games: Game[]) => {

    const gamesByGenre = useMemo(()=> {
        const result: Record<string, Game[]> = {};
        
        games.forEach((game)=> {
            const genres = game.genres.split(',').map((g)=> g.trim());
            
            genres.forEach((genre)=> {
                if(!genre) return;
                
                if(!result[genre]) {
                    result[genre] = [];
                }
                result[genre].push(game);
            });
        });
        return result;

    }, [games])
       
    return gamesByGenre;
}