import {useGenreCarousel} from '../../hooks/useGenreCarousel';
import type { Game } from '../../type/Game';

import { GameCard } from '../GameCard';

import './GenreRow.css';

interface GenreRowProps {
    genre: string;
    games: Game[];
}

export const GenreRow = ({genre, games}: GenreRowProps) => {
    const {currentGames, next, prev, isDisabled} = useGenreCarousel(games);

    return (
        <section>
            <div className='genre-row'>
                <h2>{genre}</h2>
                <div className='genre-row-controls'>
                    <button onClick={prev} disabled={isDisabled}>‹</button>
                    <button onClick={next} disabled={isDisabled}>›</button>
                </div>
            </div>
            <ul>
                {currentGames.map((game) => (
                    <li key={game.appID}>
                        <GameCard game={game}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}