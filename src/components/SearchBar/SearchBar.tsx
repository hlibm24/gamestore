import { useId, type SubmitEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from '@zcorpo/react-material-symbols/400/rounded';
import { useSearchDropdown } from "../../hooks/useSearchDropdown";

import './SearchBar.css';

export const SearchBar = () => {
    const navigate = useNavigate();
    const listboxId = useId();

    const { ref, query, open, results, setActive, setOpen, close, changeQuery, select, handleKeyDown, allResults, active } = useSearchDropdown(game => navigate(`/games/${game.slug}`));
    const hasQuery = Boolean(query.trim());
    const dropdownOpen = open && hasQuery;
    const hasResults = results.length > 0;
    const activeOptionId = dropdownOpen && hasResults && active >= 0 && active < results.length
        ? `${listboxId}-option-${results[active].appID}`
        : undefined;

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
            role="combobox"
            aria-label="Search games"
            aria-autocomplete="list"
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen && hasResults}
            aria-controls={dropdownOpen && hasResults ? listboxId : undefined}
            aria-activedescendant={activeOptionId}
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
            onFocus={()=> setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search games..." />
            <button type="submit" className="search-bar-button"
            aria-label="Search">
                <Search className="svg-search"/>
            </button>

            {dropdownOpen && (
                hasResults ? (
                    <ul id={listboxId} className="search-bar-list" role="listbox">
                        {results.map((g, i) => (
                            <li key={g.appID}
                            id={`${listboxId}-option-${g.appID}`}
                            role="option"
                            aria-selected={i === active}
                            className={`search-bar-item ${i === active ? 'active' : ''}`}
                            onMouseEnter={()=> setActive(i)}
                            onMouseLeave={()=>setActive(-1)}
                            onClick={()=> select(g)}>
                                {g.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="search-bar-list">
                        <div className="search-bar-empty" role="status" aria-live="polite">
                            Nothing found
                        </div>
                    </div>
                )
            )}
        </form>
    )
}