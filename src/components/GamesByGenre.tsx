import { useGamesByGenre } from "../hooks/useGamesByGenre";
import { GenreRow } from "./GenreRow";
import {type Game} from '../type/Game';

interface GamesByGenreProps {
    games: Game[];
}

export const GamesByGenre = ({games}:GamesByGenreProps) => {
    const genresWithEnoughGames = useGamesByGenre(games);

    return (
        <section className="gamesByGenre-section">
            <h2>Games by genre</h2>
            {genresWithEnoughGames.map(([genre, genreGames])=> (
                <GenreRow key={genre} genre={genre} games={genreGames}/>
            ))}
        </section>
    )
}