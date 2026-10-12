import { type Game } from "../../type/Game";

import './AboutGame.css';

interface AboutGameProps {
    game: Game;
}

export const AboutGame = ({game}:AboutGameProps) => {
    const genres = game.genres?.split(',').map((g) => g.trim()).filter(Boolean) ?? [];

    return (
        <div className="about-game">
            <dl className="about-list">
                <div className="about-row">
                    <dt>Release date</dt>
                    <dd>{game.release_date}</dd>
                </div>
                <div className="about-row">
                    <dt>Developer</dt>
                    <dd>{game.developers}</dd>
                </div>
                <div className="about-row">
                    <dt>Publisher</dt>
                    <dd>{game.publishers}</dd>
                </div>
            </dl>

            {genres.length > 0 && (
                <ul className="tag-list">
                    {genres.map((g) => <li key={g} className="tag">{g}</li>)}
                </ul>
            )}
        </div>
    )
}