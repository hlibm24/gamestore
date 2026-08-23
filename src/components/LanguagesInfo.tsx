import { type Game } from "../type/Game";

interface LanguagesInfoProps {
    game: Game;
}

export const LanguagesInfo = ({game}:LanguagesInfoProps) => {
    return (
        <div className="languages-info">
            <p>{game.supported_languages}</p>
            <p>{game.full_audio_languages}</p>
        </div>
    )
}