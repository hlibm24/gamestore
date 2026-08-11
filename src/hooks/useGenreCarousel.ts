import {useState, useMemo} from 'react';
import {type Game} from '../type/Game';

export const useGenreCarousel =  (games: Game[], pageSize: number = 5)=> {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(games.length / pageSize);

    const currentGames = useMemo(() => {
        const start = currentPage * pageSize;
        return games.slice(start, start + pageSize);
    }, [games, currentPage, pageSize]);

    const next = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    }

    const prev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }

    return {currentGames, next, prev, currentPage, totalPages}
}