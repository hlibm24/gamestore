import { type Game } from "../../type/Game";

import './GameSummary.css';

interface GameSummaryProps {
    game: Game;
}

export const GameSummary = ({game}:GameSummaryProps) => {
    return (
        <div className="game-summary">
            <img src={game.header_image} alt={game.name}/>
            <p>{game.short_description}</p>
        </div>
    )
}