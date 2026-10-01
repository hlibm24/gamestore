import { useState, type SubmitEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from '@zcorpo/react-material-symbols/400/rounded';

import './SearchBar.css';

export const SearchBar = () => {
    const [query, setQuery] = useState ('');
    const navigate = useNavigate();

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(query.trim() == '') return;
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="text"
            className="search-bar-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games..." />
            <button type="submit" className="search-bar-button">
                <Search className="svg-search"/>
            </button>
        </form>
    )
}