import {Link} from 'react-router-dom';
import {type Game} from '../type/Game';

interface GameCardProps {
    game: Game;
}

export const GameCard = ({game}: GameCardProps) => {
    return (
        <Link to ={`/games/${game.slug}`}>
            <img src={game.header_image} alt={game.name} />
            <p>{game.name}</p>
        </Link>
    )
}