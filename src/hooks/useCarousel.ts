import {useState, useEffect} from 'react';

export const useCarousel = (total: number, intervalMs?: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(()=> {
        if(currentIndex >= total) {
            setCurrentIndex(0);
        }
    }, [total, currentIndex]);

    const next = () => {
        setCurrentIndex((prev)=> (total === 0 ? 0 : (prev + 1) % total));
    }

    const prev = () => {
        setCurrentIndex((prev)=> (total === 0 ? 0 : (prev - 1 + total) % total));
    }

    useEffect(()=> {
        if(total === 0 || isPaused || !intervalMs) return;
        const interval = setInterval(next, intervalMs);
        return () => clearInterval(interval);
    }, [total, intervalMs, isPaused]);

    const pause = () => setIsPaused(true);
    const resume = () => setIsPaused(false);

    return {currentIndex, next, prev, pause, resume};
}