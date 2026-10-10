import { type Game } from "../../type/Game";

import './GameDescription.css';

interface GameDescriptionProps {
    game: Game;
}

export const GameDescription = ({game}:GameDescriptionProps) => {
    return (
        <div className="game-description">
            {game.reviews && <p className="game-reviews">{game.reviews}</p>}
        </div>
    )
}