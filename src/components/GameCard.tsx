import {Link} from 'react-router-dom';
import {type Game} from '../type/Game';

interface GameCardProps {
    game: Game;
}

export const GameCard = ({game}: GameCardProps) => {
    return (
        <Link to ={`/games/${game.slug}`} className='game-card'>
            <img src={game.header_image} alt={game.name}/>
        </Link>
    )
}