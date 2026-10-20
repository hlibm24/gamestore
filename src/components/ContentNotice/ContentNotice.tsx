import { type Game } from "../../type/Game";

import './ContentNotice.css';

interface ContentNoticeProps {
    game: Game;
}

export const ContentNotice = ({game}:ContentNoticeProps) => {
    const hasAge = game.required_age !== '0' && game.required_age !== '';
    if(!game.notes && !hasAge) return null;

    return (
        <div className="content-notice">
            {hasAge && (
                <p className="content-notice-age">
                    AGE REQUIRED: {`${game.required_age}+`}
                </p>)}
                {game.notes && <p className="content-notice-text">{game.notes}</p>}
        </div>
    )
}