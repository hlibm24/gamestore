import { useState, useEffect, useMemo } from 'react';
import { type Game } from '../type/Game';

export const useBanner = (games: Game[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const featuredGames = useMemo(
        () => games.filter((game) => game.isFeatured === true),
        [games]
    );

    const total = featuredGames.length;

    useEffect(() => {
        if (currentIndex >= total) {
            setCurrentIndex(0);
        }
    }, [total, currentIndex]);

    const next = () => {
        setCurrentIndex((prev) => (total === 0 ? 0 : (prev + 1) % total));
    };

    const prev = () => {
        setCurrentIndex((prev) => (total === 0 ? 0 : (prev - 1 + total) % total));
    };

    useEffect(() => {
        if (total === 0) return;
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [total]);

    const currentGame = featuredGames[currentIndex];

    return {currentGame, next, prev};
};