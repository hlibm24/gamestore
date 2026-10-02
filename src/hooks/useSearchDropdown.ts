import { useState, useMemo, useCallback, type KeyboardEvent } from 'react';
import { useClickOutside } from './useClickOutside';
import { type Game } from '../type/Game';
import { useGamesContext } from '../context/GamesContext';

export function useSearchDropdown(onSelect: (game: Game) => void) {
    const { searchGames } = useGamesContext();

    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(-1);

    const allResults = useMemo(()=> searchGames(query), [query, searchGames]);
    const results = allResults.slice(0, 6);

    const close = useCallback(()=> {
        setOpen(false);
        setActive(-1);
    }, []);

    const ref = useClickOutside<HTMLFormElement>(close);

    const changeQuery = (value: string) => {
        setQuery(value);
        setOpen(true);
        setActive(-1);
    }

    const select = (game: Game) => {
        onSelect(game);
        setQuery('');
        close();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'ArrowDown') {
            e.preventDefault();
            setActive(i => Math.min(i + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive(i => Math.max( i - 1, 0));
        } else if (e.key === 'Enter' && active >= 0) {
            e.preventDefault();
            select(results[active]);
        } else if (e.key === 'Escape') {
            close();
        }
    }

    return { ref, query, open, active, results, setActive, setOpen, close, changeQuery, select, handleKeyDown ,allResults }
}