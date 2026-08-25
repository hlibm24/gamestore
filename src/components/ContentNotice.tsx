import { type Game } from "../type/Game";

interface ContentNoticeProps {
    game: Game;
}

export const ContentNotice = ({game}:ContentNoticeProps) => {

    if(!game.notes && game.required_age === '0') return null;

    return (
        <div className="content-notice">
            {game.notes && <p>{game.notes}</p>}
            {game.required_age !== '0' && <p>AGE REQUIRED: {game.required_age}+</p>}
        </div>
    )
}