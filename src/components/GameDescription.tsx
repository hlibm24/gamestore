import { type Game } from "../type/Game";

interface GameDescriptionProps {
    game: Game;
}

export const GameDescription = ({game}:GameDescriptionProps) => {
    return (
        <div className="game-description">
            {game.reviews && <p>{game.reviews}</p>}
            <p>{game.detailed_description}</p>
        </div>
    )
}