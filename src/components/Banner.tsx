import {type Game} from '../type/Game';
import { useBanner } from '../hooks/useBanner';

import {GameCard} from '../components/GameCard';

interface BannerProps {
    games: Game[];
}

export const Banner = ({games}: BannerProps) => {
    const {currentGame, next, prev} = useBanner(games);

    if(!currentGame) return null;

    return (
        <>
        <h3>Store creator recommends</h3>
            <div className='banner'>
                <button onClick={prev}>‹</button>
                <GameCard game={currentGame}/>
                <button onClick={next}>›</button>
            </div>
        </>
    )
}