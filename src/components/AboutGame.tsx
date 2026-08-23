import { type Game } from "../type/Game";

interface AboutGameProps {
    game: Game;
}

export const AboutGame = ({game}:AboutGameProps) => {
    return (
        <div className="about-game">
            <p>{game.release_date}</p>
            <p>{game.developers}</p>
            <p>{game.categories}</p>
        </div>
    )
}