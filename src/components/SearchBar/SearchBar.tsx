import { type SubmitEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from '@zcorpo/react-material-symbols/400/rounded';
import { useSearchDropdown } from "../../hooks/useSearchDropdown";

import './SearchBar.css';

export const SearchBar = () => {
    const navigate = useNavigate();

    const { ref, query, open, results, setActive, setOpen, close, changeQuery, select, handleKeyDown, allResults, active } = useSearchDropdown(game => navigate(`/games/${game.slug}`));

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const q = query.trim();
        if(!q) return;

        if(allResults.length === 1) {
            navigate(`/games/${allResults[0].slug}`);
        } else {
            navigate(`/search?q=${encodeURIComponent(q)}`)
        }
        close();
    }

    return (
        <form ref={ref} onSubmit={handleSubmit} className="search-bar">
            <input type="text"
            className="search-bar-input"
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
            onFocus={()=> setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search games..." />
            <button type="submit" className="search-bar-button">
                <Search className="svg-search"/>
            </button>

            {open && query.trim() && (
                <ul className="search-bar-list">
                    {results.length ? (
                        results.map((g, i) => (
                            <li key={g.appID}
                            className={`search-bar-item ${i === active ? 'active' : ''}`}
                            onMouseEnter={()=> setActive(i)}
                            onMouseLeave={()=>setActive(-1)}
                            onClick={()=> select(g)}>
                                {g.name}
                            </li>
                        ))
                        ) : (<li className='search-bar-empty'>Nothing found</li>)
                    }
                </ul>
            )}
        </form>
    )
}