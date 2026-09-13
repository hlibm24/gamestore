import { useGamesByGenre } from "../hooks/useGamesByGenre";
import { GenreRow } from "./GenreRow";
import {type Game} from '../type/Game';

interface GenreSectionsProps {
    games: Game[];
}

export const GenreSections = ({games}:GenreSectionsProps) => {
    const genresWithEnoughGames = useGamesByGenre(games);

    return (
        <>
            {genresWithEnoughGames.map(([genre, genreGames])=> (
                <GenreRow key={genre} genre={genre} games={genreGames}/>
            ))}
        </>
    )
}