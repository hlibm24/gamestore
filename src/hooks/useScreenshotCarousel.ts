import { useCarousel } from "./useCarousel";

export const useScreenshotCarousel = (screenshotsString: string) => {
    const screenshots = screenshotsString.split(',').map((url) => url.trim());
    
    const {currentIndex, next, prev} = useCarousel(screenshots.length, 5000);
    
    const currentScreenshot = screenshots[currentIndex];

    return {currentScreenshot, next, prev}
}