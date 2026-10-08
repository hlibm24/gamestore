import { type Game } from '../../type/Game';
import { useParams } from 'react-router-dom';
import { GamePageInfo } from '../../components/GamePageInfo';
import { GenreRow } from '../../components/GenreRow/GenreRow';
import { Page404 } from '../Page404';

import { GameSummary } from '../../components/GameSummary';
import { ContentNotice } from '../../components/ContentNotice';
import { PurchaseBox } from '../../components/PurchaseBox';
import { AboutGame } from '../../components/AboutGame';
import { LanguagesInfo } from '../../components/LanguagesInfo';

import { useSimilarGames } from '../../hooks/useSimilarGames';

import './GamePage.css';

interface GamePageProps {
    games: Game[];
}

export const GamePage = ({games}:GamePageProps) => {
    const {slug} = useParams();
    const game = games.find((g)=> g.slug === slug);
    const similarGames = useSimilarGames(game, games);

    if(!game) return <Page404 />

    return (
        <div className='game-page'>
            <div className='game-layout'>
                <GamePageInfo game={game}/>

                <div className='game-primary'>
                    <GameSummary game={game}/>
                    <ContentNotice game={game}/>
                    <PurchaseBox game={game}/>
                </div>
                
                <div className='game-details'>
                    <AboutGame game={game}/>
                    <LanguagesInfo game={game}/>
                </div>
            </div>

            {similarGames.length > 0 && (
                <GenreRow genre="You might also like" games={similarGames}/>
            )}
        </div>
    )
}