import {useState, useMemo, useEffect} from 'react';
import {type Game} from '../type/Game';

export const useGenreCarousel =  (games: Game[], pageSize: number)=> {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(()=> {
        setCurrentPage(0);
    }, [pageSize])

    const totalPages = Math.ceil(games.length / pageSize);
    const safePage = Math.min(currentPage, Math.max(totalPages - 1, 0));

    const currentGames = useMemo(() => {
        const count = Math.min(pageSize, games.length);
        const start = safePage * pageSize;

        return Array.from(
            { length: count },
            (_, index) => games[(start + index) % games.length]
        );
    }, [games, pageSize, safePage]);

    const next = () => {
        if(totalPages === 0) return;
        setCurrentPage((prev) => (Math.min(prev, totalPages - 1) + 1) % totalPages);
    }

    const prev = () => {
        if(totalPages === 0) return;
        setCurrentPage((prev) => (Math.min(prev, totalPages - 1) - 1 + totalPages) % totalPages);
    }

    const isDisabled = totalPages <= 1;

    return {currentGames, next, prev, currentPage: safePage, totalPages, isDisabled};
}