import { RequirementsList } from "./RequirementsList";
import { type Game } from "../type/Game";

interface GameRequirementsProps {
    game: Game;
}

export const GameRequirements = ({game}:GameRequirementsProps) => {
    return (
        <div className="requirements">
            <h2>System Requirements:</h2>
            <RequirementsList title="Minimum" requirements={game.minimum_requirements}/>
            <RequirementsList title="Recommended" requirements={game.recommended_requirements}/>
        </div>
    )
}