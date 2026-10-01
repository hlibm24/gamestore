import {Link} from 'react-router-dom';
import {type Game} from '../../type/Game';

import './GameCard.css';

interface GameCardProps {
    game: Game;
    className?: string;
}

export const GameCard = ({game, className}: GameCardProps) => {
    return (
        <Link to ={`/games/${game.slug}`} className={`game-card ${className ?? ''}`}>
            <img src={game.header_image} alt={game.name}/>
        </Link>
    )
}