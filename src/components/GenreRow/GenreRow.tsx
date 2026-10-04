import {useGenreCarousel} from '../../hooks/useGenreCarousel';
import { usePageSize } from '../../hooks/usePageSize';
import type { Game } from '../../type/Game';

import { ChevronLeft, ChevronRight } from '@zcorpo/react-material-symbols/400/rounded';


import { GameCard } from '../GameCard/GameCard';

import './GenreRow.css';

interface GenreRowProps {
    genre: string;
    games: Game[];
}

export const GenreRow = ({genre, games}: GenreRowProps) => {
    const pageSize = usePageSize();
    const {currentGames, next, prev, isDisabled} = useGenreCarousel(games, pageSize);

    return (
        <section className='genre-row-section'>
            <div className='genre-row-header'>
                <h2>{genre}</h2>
                <div className='genre-row-controls'>
                    <button onClick={prev} 
                    aria-label='Previous'
                    disabled={isDisabled} className='carousel-arrow'>
                        <ChevronLeft className='svg-arrow'/>
                    </button>
                    <button onClick={next}
                    aria-label='Next'
                    disabled={isDisabled} className='carousel-arrow'>
                        <ChevronRight className='svg-arrow'/>
                    </button>
                </div>
            </div>
            <ul className='genre-row-games'>
                {currentGames.map((game) => (
                    <li key={game.appID} className='genre-row-game' title={game.name}>
                        <GameCard game={game} className='genre-row-game-banner'/>

                        <div className='genre-row-info'>
                        <p className='genre-row-game-name'>{game.name}</p>
                        <p className='genre-row-game-price'>{game.price > 0 ? `$${game.price.toFixed(2)}` : 'Free to play'}</p>
                        </div>

                    </li>
                ))}
            </ul>
        </section>
    )
}