import { Banner } from "../components/Banner/Banner";
import { GamesByGenre } from "../components/GamesByGenre/GamesByGenre";
import {type Game} from '../type/Game';

interface StoreProps {
    games: Game[];
}

export const Store = ({games}: StoreProps) => {

    return (
        <div>
            <Banner games={games} />
            <GamesByGenre games={games}/>
        </div>
    )
}