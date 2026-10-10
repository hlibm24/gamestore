import { RequirementsList } from "../RequirementsList/RequirementsList";
import { type Game } from "../../type/Game";

import './GameRequirements.css';

interface GameRequirementsProps {
    game: Game;
}

export const GameRequirements = ({game}:GameRequirementsProps) => {
    return (
        <div className="game-requirements">
            <h2 className="game-requirements-title">System Requirements:</h2>
            <div className="min-requirements">
                <RequirementsList title="Minimum" requirements={game.minimum_requirements}/>
            </div>
            <div className="rec-requirements">
                <RequirementsList title="Recommended" requirements={game.recommended_requirements}/>
            </div>
        </div>
    )
}