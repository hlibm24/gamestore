import {useState, useEffect} from 'react';

export const useCarousel = (total: number) => {
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
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [total]);

    return {currentIndex, next, prev};
}