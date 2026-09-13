import {useGenreCarousel} from '../hooks/useGenreCarousel';
import type { Game } from '../type/Game';

import { GameCard } from './GameCard';

interface GenreRowProps {
    genre: string;
    games: Game[];
}

export const GenreRow = ({genre, games}: GenreRowProps) => {
    const {currentGames, next, prev, isDisabled} = useGenreCarousel(games);

    return (
        <section>
            <h2>{genre}</h2>
            <div className='genre-row'>
                <button onClick={prev} disabled={isDisabled}>‹</button>
                <button onClick={next} disabled={isDisabled}>›</button>
                <ul>
                    {currentGames.map((game) => (
                        <li key={game.appID}>
                            <GameCard game={game}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}