import { type Game } from "../type/Game";
import { ScreenshotBanner } from "./screenshotBanner";

interface GamePageInfoProps {
    game: Game;
}

export const GamePageInfo = ({game}:GamePageInfoProps) => {
    
    return (
        <div>
            <h2>
                <ScreenshotBanner screenshots={game.screenshots} />
            </h2>

        </div>
    )
}