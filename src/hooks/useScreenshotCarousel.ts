import { useCarousel } from "./useCarousel";
import { parseCommaList } from "../utils/parseCommaList";

export const useScreenshotCarousel = (screenshotsString: string) => {
    const screenshots = parseCommaList(screenshotsString);
    
    const {currentIndex, next, prev} = useCarousel(screenshots.length);
    
    const currentScreenshot = screenshots[currentIndex];

    return {currentScreenshot, next, prev}
}