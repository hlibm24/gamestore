import { type Game } from '../type/Game';
import { useParams } from 'react-router-dom';
import { GamePageInfo } from '../components/GamePageInfo';
import { GameSidebar } from '../components/GameSidebar';
import { GenreRow } from '../components/GenreRow';
import { Page404 } from './Page404';

import { useSimilarGames } from '../hooks/useSimilarGames';

interface GamePageProps {
    games: Game[];
}

export const GamePage = ({games}:GamePageProps) => {
    const {slug} = useParams();
    const game = games.find((g)=> g.slug === slug);
    const similarGames = useSimilarGames(game, games);

    if(!game) return <Page404 />

    return (
        <>
            <GamePageInfo game={game}/>

            <GameSidebar game={game}/>

            {similarGames.length > 0 && (
                <GenreRow genre="You might also like" games={similarGames}/>
            )}
        </>
    )
}