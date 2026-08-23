import { type Game } from "../type/Game";

import { GameSummary } from "./GameSummary";
import { ContentNotice } from "./ContentNotice";
import { PurchaseBox } from "./PurchaseBox";
import { AboutGame } from "./AboutGame";
import { LanguagesInfo } from "./LanguagesInfo";

interface GameAdditionalInfoProps {
    game: Game;
}

export const GameSidebar = ({game}:GameAdditionalInfoProps) => {
    return (
        <div className="sidebar">
            <GameSummary game={game}/>
            <ContentNotice game={game}/>
            <PurchaseBox game={game}/>
            <AboutGame game={game}/>
            <LanguagesInfo game={game}/>
        </div>
    )
}