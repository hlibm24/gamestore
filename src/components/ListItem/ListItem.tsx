import { Link } from "react-router-dom";
import { type GameSummary } from '../../utils/gameSummary';

import './ListItem.css';

interface ListItemProps {
    game: GameSummary;
    showPrice?: boolean;
}

export const ListItem = ({game, showPrice = false}: ListItemProps) => {
    return (
        <Link to={`/games/${game.slug}`} className="list-item">
            <img src={game.header_image} alt={game.name} />
            <div className="item-info">
                <h3 title={game.name}>{game.name}</h3>
                {showPrice && <p>${game.price}</p>}
            </div>
        </Link>
    )
}