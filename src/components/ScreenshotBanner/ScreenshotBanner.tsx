import { useScreenshotCarousel } from "../../hooks/useScreenshotCarousel";
import { ChevronLeft, ChevronRight } from '@zcorpo/react-material-symbols/400/rounded';

import './ScreenshotBanner.css';
import '../../styles/carousel-arrow.css';

interface ScreenshotBannerProps {
    screenshots: string;
}

export const ScreenshotBanner = ({screenshots}: ScreenshotBannerProps) => {

const {currentScreenshot, next, prev} = useScreenshotCarousel(screenshots);

if(!currentScreenshot) return null;

    return (
        <div className="screenshot-banner">
            <button className="carousel-arrow carousel-arrow-prev"
            onClick={prev}
            aria-label="Previous">
                <ChevronLeft className="svg-arrow"/>
            </button>
            <img src={currentScreenshot} alt="screenshot" />
            <button className="carousel-arrow carousel-arrow-next"
            onClick={next}
            aria-label="Next">
                <ChevronRight className="svg-arrow"/>
            </button>
        </div>
    )

}