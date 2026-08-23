import { type Game } from "../type/Game";

import { ScreenshotBanner } from "./ScreenshotBanner";
import { GameDescription } from "./GameDescription";
import { GameRequirements } from "./GameRequirements";

interface GamePageInfoProps {
    game: Game;
}

export const GamePageInfo = ({game}:GamePageInfoProps) => {
    
    return (
        <div className="game-info">
            <h2>{game.name}</h2>
            <ScreenshotBanner screenshots={game.screenshots} />
            
            <GameDescription game={game}/>
            
            <GameRequirements game={game}/>
        </div>
    )
}