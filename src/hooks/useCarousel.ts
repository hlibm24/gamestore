import {useState, useEffect} from 'react';

export const useCarousel = (total: number, intervalMs: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
        if(total === 0) return;
        const interval = setInterval(next, intervalMs);
        return () => clearInterval(interval);
    }, [total, intervalMs]);

    return {currentIndex, next, prev};
}