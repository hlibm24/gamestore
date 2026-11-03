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

        const sourcesToPreload = new Set(
            [1, 2, -1].map((offset) => screenshots[(currentIndex + offset + total) % total])
        );
        sourcesToPreload.forEach((src) => {
            const img = new Image();
            img.src = src;
        })
    }, [currentIndex, screenshots]);

    return {currentScreenshot, next, prev}
}