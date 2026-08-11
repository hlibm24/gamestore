import {useGenreCarousel} from '../hooks/useGenreCarousel';
import type { Game } from '../type/Game';

interface GenreRowProps {
    genre: string;
    games: Game[];
}

export const GenreRow = ({genre, games}: GenreRowProps) => {
    const {currentGames, next, prev} = useGenreCarousel(games);

    return (
        <section>
            <h2>{genre}</h2>
            <div className='genre-row'>
                <button onClick={prev}>‹</button>
                <ul>
                    {currentGames.map((game) => (
                        <li key={game.appID}>
                            {game.name}
                            <img src={game.header_image} alt={game.name} />
                        </li>
                    ))}
                </ul>
                <button onClick={next}>›</button>
            </div>
        </section>
    )
}