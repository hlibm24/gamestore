import { useGamesByGenre } from "../../hooks/useGamesByGenre";
import { GenreRow } from "../GenreRow/GenreRow";
import {type Game} from '../../type/Game';

import './GamesByGenre.css';

interface GamesByGenreProps {
    games: Game[];
}

export const GamesByGenre = ({games}:GamesByGenreProps) => {
    const genresWithEnoughGames = useGamesByGenre(games);

    return (
        <section className="games-by-genre-section container">
            <h2>Games by genre</h2>
            {genresWithEnoughGames.map(([genre, genreGames])=> (
                <GenreRow key={genre} genre={genre} games={genreGames}/>
            ))}
        </section>
    )
}