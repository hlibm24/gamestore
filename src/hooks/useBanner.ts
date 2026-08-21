import { useMemo} from 'react';
import {type Game} from '../type/Game';
import {useCarousel} from './useCarousel';

export const useBanner = (games: Game[]) => {
    
    const featuredGames = useMemo(
        () => games.filter((game) => game.isFeatured === true),
        [games]
    );
    
    const {currentIndex, next, prev} = useCarousel(featuredGames.length)

    const currentGame = featuredGames[currentIndex];

    return {currentGame, next, prev};
};