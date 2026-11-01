import {useState, useEffect, useCallback} from 'react';

export const useCarousel = (total: number, intervalMs?: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(()=> {
        setCurrentIndex(prev=> (prev >= total ? 0 : prev));
    }, [total]);

    const safeIndex = total > 0 && currentIndex < total ? currentIndex : 0;

    const next = useCallback(() => {
        setCurrentIndex((prev)=> (total === 0 ? 0 : (prev + 1) % total));
    }, [total]);

    const prev = useCallback(() => {
        setCurrentIndex((prev)=> (total === 0 ? 0 : (prev - 1 + total) % total));
    }, [total]);

    useEffect(()=> {
        if(total === 0 || isPaused || intervalMs === undefined || !Number.isFinite(intervalMs) || intervalMs <= 0) return;
        const interval = setInterval(next, intervalMs);
        return () => clearInterval(interval);
    }, [total, intervalMs, isPaused, next]);

    const pause = () => setIsPaused(true);
    const resume = () => setIsPaused(false);

    return {currentIndex: safeIndex, next, prev, pause, resume};
}