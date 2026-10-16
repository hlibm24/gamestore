import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { type Game } from "../../type/Game";
import { useGameSearch } from "../../hooks/useGameSearch";
import { Link } from "react-router-dom";

import './SearchResults.css';

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
    if(matches.length === 0) return (
        <div className="container">
            <p className="no-results">No games found for "{query}"</p>
        </div>
    )


    return (
        <div className="search-results container">
            <h2>Results for "{query}"</h2>
            <ul>
                {matches.map(game=> (
                    <li key={game.appID}>
                        <Link to={`/games/${game.slug}`} className="search-result">
                            <img src={game.header_image} alt={game.name} />
                            <div className="search-result-info">
                                <h3 title={game.name}>{game.name}</h3>
                                <p>{game.price}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}