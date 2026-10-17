import { ListItem } from "../ListItem/ListItem";
import { type GameSummary } from "../../utils/gameSummary";

import './ItemsList.css';

interface ItemsListProps {
    games: GameSummary[];
    showPrice?: boolean;
}

export const ItemsList = ({games, showPrice}:ItemsListProps) => {
    return (
        <ul className="items-list">
            {games.map(game=> (
                <li key={game.appID}>
                    <ListItem game={game} showPrice={showPrice}/>
                </li>
            ))}
        </ul>
    )
}