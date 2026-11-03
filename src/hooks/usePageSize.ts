import { useState, useEffect } from 'react';

const getSize = () => {
    if(window.matchMedia('(max-width: 640px)').matches) return 2;
    if(window.matchMedia('(max-width: 1024px)').matches) return 3;
    return 5;
};

export const usePageSize = () => {
    const [size, setSize] = useState(getSize);

    useEffect(()=> {
        const mobile = window.matchMedia('(max-width: 640px)');
        const tablet = window.matchMedia('(max-width: 1024px)');

        const updateSize = () => setSize(getSize());

        mobile.addEventListener('change', updateSize);
        tablet.addEventListener('change', updateSize);

        return () => {
            mobile.removeEventListener('change', updateSize);
            tablet.removeEventListener('change', updateSize);
        }
    }, []);

    return size;
}