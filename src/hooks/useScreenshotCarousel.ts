import { useEffect, useMemo } from 'react';
import { useCarousel } from "./useCarousel";
import { parseCommaList } from "../utils/parseCommaList";

export const useScreenshotCarousel = (screenshotsString: string) => {
    const screenshots = useMemo(
        ()=> parseCommaList(screenshotsString), [screenshotsString]
    )
    
    const {currentIndex, next, prev} = useCarousel(screenshots.length);
    
    const currentScreenshot = screenshots[currentIndex];

    useEffect(() => {
        const total = screenshots.length;
        if(total === 0) return;

        [1, 2, -1].forEach((offset) => {
            const src = screenshots[(currentIndex + offset + total) % total];
            const img = new Image();
            img.src = src;
        })
    }, [currentIndex, screenshots]);

    return {currentScreenshot, next, prev}
}