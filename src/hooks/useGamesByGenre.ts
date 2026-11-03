import {useMemo} from 'react';
import {type Game} from '../type/Game';
import { parseCommaList } from '../utils/parseCommaList';

export const useGamesByGenre = (games: Game[]) => {

    const gamesWithEnoughGames = useMemo(()=> {
        const result: Record<string, Game[]> = {};
        
        games.forEach((game)=> {
            const genres = parseCommaList(game.genres);
            
            genres.forEach((genre)=> {
                if(!genre) return;
                
                if(!result[genre]) {
                    result[genre] = [];
                }
                result[genre].push(game);
            });
        });
        return Object.entries(result).filter(
            ([, genreGames]) => genreGames.length >= 5
        );

    }, [games]);
    
       
    return gamesWithEnoughGames;
}