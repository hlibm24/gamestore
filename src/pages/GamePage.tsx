import {type Game} from '../type/Game';
import { useParams } from 'react-router-dom';
import {GamePageInfo} from '../components/GamePageInfo';

interface GamePageProps {
    games: Game[];
}

export const GamePage = ({games}:GamePageProps) => {
    const {slug} = useParams();
    const game = games.find((g)=> g.slug === slug)
    

    if(!game) return <p>The game not found</p>

    return (
        <>
            <GamePageInfo game={game}/>
        </>
    )
}