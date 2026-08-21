import { useScreenshotCarousel } from "../hooks/useScreenshotCarousel";

interface ScreenshotBannerProps {
    screenshots: string;
}

export const ScreenshotBanner = ({screenshots}: ScreenshotBannerProps) => {

const {currentScreenshot, next, prev} = useScreenshotCarousel(screenshots);

if(!currentScreenshot) return null;

    return (
        <div className="banner">
            <button onClick={prev}>‹</button>
            <img src={currentScreenshot} alt="screenshot" />
            <button onClick={next}>›</button>
        </div>
    )

}