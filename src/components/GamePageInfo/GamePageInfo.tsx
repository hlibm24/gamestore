import { type Game } from "../../type/Game";

import { ScreenshotBanner } from "../ScreenshotBanner/ScreenshotBanner";
import { GameDescription } from "../GameDescription/GameDescription";
import { GameRequirements } from "../GameRequirements/GameRequirements";

import './GamePageInfo.css';

interface GamePageInfoProps {
    game: Game;
}

export const GamePageInfo = ({game}:GamePageInfoProps) => {
    
    return (
        <section className="game-info">
            <ScreenshotBanner screenshots={game.screenshots} />
            
            <GameDescription game={game}/>
            
            <GameRequirements game={game}/>
        </section>
    )
}