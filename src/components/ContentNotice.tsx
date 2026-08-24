import { type Game } from "../type/Game";

interface ContentNoticeProps {
    game: Game;
}

export const ContentNotice = ({game}:ContentNoticeProps) => {
    return (
        <div className="content-notice">
            {game.notes && <p>{game.notes}</p>}
            <p>AGE REQUIRED: {game.required_age}</p>
        </div>
    )
}