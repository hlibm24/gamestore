import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { type Game } from "../../type/Game";
import { useGameSearch } from "../../hooks/useGameSearch";

import { ItemsList } from '../../components/ItemsList/ItemsList';

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
            <ItemsList games={matches} showPrice />
        </div>
    )

}