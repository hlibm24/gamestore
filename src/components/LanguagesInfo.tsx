import { type Game } from "../type/Game";

interface LanguagesInfoProps {
    game: Game;
}

export const LanguagesInfo = ({game}:LanguagesInfoProps) => {
    
    if(!game.supported_languages && !game.full_audio_languages) return null;

    return (
        <div className="languages-info">
            {game.supported_languages && <p>{game.supported_languages}</p>}
            {game.full_audio_languages && <p>{game.full_audio_languages}</p>}
        </div>
    )
}