import { useState, useEffect } from 'react';

const getSize = () => {
    if(window.matchMedia('(max-width: 640px)').matches) return 2;
    if(window.matchMedia('(max-width: 1024px)').matches) return 3;
    return 5;
};

export const usePageSize = () => {
    const [size, setSize] = useState(getSize);

    useEffect(()=> {
        const onResize = () => setSize(getSize());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return size;
}