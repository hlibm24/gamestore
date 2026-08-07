import { useGamesByGenre } from "../hooks/useGamesByGenre";
import {type Game} from '../type/Game';

interface GenreSectionsProps {
    games: Game[];
}

export const GenreSections = ({games}:GenreSectionsProps) => {
    const gamesByGenre = useGamesByGenre(games);

    return (
        <>
            {Object.entries(gamesByGenre).map(([genre, genreGames])=> (
                <section key={genre}>
                    <h2>{genre}</h2>
                    <ul className="genre-list">
                        {genreGames.map((game)=> (
                            <li key={game.appID}>
                                <h2>{game.name}</h2>
                                <img src={game.header_image} alt={game.name} />
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    )
}