import {type Game} from '../type/Game';
import { useBanner } from '../hooks/useBanner';

import {GameCard} from '../components/GameCard';

interface BannerProps {
    games: Game[];
}

export const Banner = ({games}: BannerProps) => {
    const {currentGame, next, prev, pause, resume} = useBanner(games);

    if(!currentGame) return null;

    return (
        <section className='recommends-banner'>
            <h3>Store creator recommends</h3>
            <div className='banner'
            onMouseEnter={pause}
            onMouseLeave={resume}>
                <button onClick={prev}>‹</button>
                <GameCard game={currentGame}/>
                <button onClick={next}>›</button>
            </div>
        </section>
    )
}