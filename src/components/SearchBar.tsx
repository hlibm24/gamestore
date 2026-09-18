import { useState, type SubmitEventHandler } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const [query, setQuery] = useState ('');
    const navigate = useNavigate();

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(query.trim() == '') return;
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games..." />
            <button type="submit">Search</button>
        </form>
    )
}