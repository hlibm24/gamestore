import { type Game } from "../../type/Game";

import { ScreenshotBanner } from "../ScreenshotBanner/ScreenshotBanner";
import { GameDescription } from "../GameDescriptions/GameDescription";
import { GameRequirements } from "../GameRequirements/GameRequirements";

import './GamePageInfo.css';

interface GamePageInfoProps {
    game: Game;
}

export const GamePageInfo = ({game}:GamePageInfoProps) => {
    
    return (
        <section className="game-info">
            <h2>{game.name}</h2>
            <ScreenshotBanner screenshots={game.screenshots} />
            
            <GameDescription game={game}/>
            
            <GameRequirements game={game}/>
        </section>
    )
}