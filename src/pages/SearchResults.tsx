import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { type Game } from "../type/Game";
import { useGameSearch } from "../hooks/useGameSearch";
import { GameCard } from "../components/GameCard";

interface SearchResultsProps {
    games: Game[];
}


export const SearchResults = ({games}: SearchResultsProps) => {
    const {query, matches} = useGameSearch(games)
    const navigate = useNavigate();

    useEffect(()=> {
        if(matches.length === 1) {
            navigate(`/games/${matches[0].slug}`, {replace: true});
        }
    }, [matches, navigate]);

    if(matches.length === 1) return null;
    if(matches.length === 0) return <p>No games found for "{query}"</p>


    return (
        <div className="search-results">
            <h2>Results for "{query}"</h2>
            <ul>
                {matches.map(game=> (
                    <li key={game.appID}>
                        <GameCard game={game}/>
                    </li>
                ))}
            </ul>
        </div>
    )

}