import { type Game } from "../../type/Game";

import './LanguagesInfo.css';

interface LanguagesInfoProps {
    game: Game;
}

interface LanguageRowProps {
    label: string;
    value?: string;
}

const LanguageRow = ({label, value}: LanguageRowProps) => {
    if(!value) return null;

    return (
        <div className="language-row">
            <span className="language-label">{label}</span>
            <p className="language-list">{value.split(',').join(', ')}</p>
        </div>
    )
}

export const LanguagesInfo = ({game}:LanguagesInfoProps) => {
    
    if(!game.supported_languages && !game.full_audio_languages) return null;

    return (
        <div className="languages-info">
            <LanguageRow label='Interface & subtitles' value={game.supported_languages} />
            <LanguageRow label='Full auido' value={game.full_audio_languages} />
        </div>
    )
}