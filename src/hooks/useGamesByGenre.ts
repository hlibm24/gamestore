import {useMemo} from 'react';
import {type Game} from '../type/Game';
import { parseCommaList } from '../utils/parseCommaList';

export const useGamesByGenre = (games: Game[]) => {

    const gamesByGenre = useMemo(()=> {
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
        return result;

    }, [games]);
    
    const genresWithEnoughGames = Object.entries(gamesByGenre).filter(
        ([, games]) => games.length >= 3
    );
       
    return genresWithEnoughGames;
}