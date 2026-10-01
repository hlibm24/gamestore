import {type Game} from '../../type/Game';
import { useBanner } from '../../hooks/useBanner';

import {GameCard} from '../GameCard/GameCard';

import { ChevronLeft, ChevronRight } from '@zcorpo/react-material-symbols/400/rounded';

import './Banner.css';

interface BannerProps {
    games: Game[];
}

export const Banner = ({games}: BannerProps) => {
    const {currentGame, next, prev, pause, resume} = useBanner(games);

    if(!currentGame) return null;

    return (
        <section className='recommends-banner' style={{ '--bg-image': `url(${currentGame.header_image})` } as React.CSSProperties}>

            <div className='recommends-banner-inner'>
                <h3>Store creator recommends</h3>
                <div className="banner" 
                onMouseEnter={pause}
                onMouseLeave={resume}>
                    <button className="carousel-arrow carousel-arrow-prev" onClick={prev}>
                        <ChevronLeft className='svg-arrow'/>
                    </button>
                    <GameCard game={currentGame} className='banner-card' />
                    <button className="carousel-arrow carousel-arrow-next" onClick={next}>
                        <ChevronRight className='svg-arrow'/>
                    </button>
                </div>
            </div>

        </section>
    )
}