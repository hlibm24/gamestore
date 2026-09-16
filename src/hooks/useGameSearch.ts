import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { type Game } from "../type/Game";

export const useGameSearch = (games: Game[]) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') ?? '';

    const matches = useMemo(
        () => games.filter(game=> game.name.toLowerCase().includes(query.toLowerCase())),
        [games, query]
    )

    return {query, matches};
}