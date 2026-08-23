import { type Game } from "../type/Game";

interface ContentNoticeProps {
    game: Game;
}

export const ContentNotice = ({game}:ContentNoticeProps) => {
    return (
        <div className="content-notice">
            <p>{game.notes}</p>
            <p>{game.required_age}</p>
        </div>
    )
}