import {type Game} from '../../type/Game';
import { useBanner } from '../../hooks/useBanner';

import {GameCard} from '../GameCard/GameCard';

import { ChevronLeft, ChevronRight } from '@zcorpo/react-material-symbols/400/rounded';

import './Banner.css';


interface BannerProps {
    games: Game[];
}

type BannerStyle = React.CSSProperties & {
    '--bg-image': string;
}

export const Banner = ({games}: BannerProps) => {
    const {currentGame, next, prev, pause, resume} = useBanner(games);

    const style: BannerStyle = {
        '--bg-image': `url('${currentGame.header_image}')`,
    }

    if(!currentGame) return null;

    return (
        <section className='recommends-banner' style={style}>

            <div className='recommends-banner-inner'>
                <h2>Store creator recommends</h2>
                <div className="banner" 
                onMouseEnter={pause}
                onMouseLeave={resume}>
                    <button className="carousel-arrow carousel-arrow-prev"
                    aria-label='Previous'
                    onClick={prev}>
                        <ChevronLeft className='svg-arrow'/>
                    </button>
                    <GameCard game={currentGame} className='banner-card' />
                    <button className="carousel-arrow carousel-arrow-next"
                    aria-label='Next'
                    onClick={next}>
                        <ChevronRight className='svg-arrow'/>
                    </button>
                </div>
            </div>

        </section>
    )
}