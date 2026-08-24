import { type Game } from "../type/Game";

interface AboutGameProps {
    game: Game;
}

export const AboutGame = ({game}:AboutGameProps) => {
    return (
        <div className="about-game">
            <p>RELEASE DATE: {game.release_date}</p>
            <p>DEVELOPER: {game.developers}</p>
            <p>PUBLISHER: {game.publishers}</p>
            <p>Game categories: {game.categories}</p>
        </div>
    )
}