import { Banner } from "../components/Banner";
import { GenreSections } from "../components/GamesByGenre";
import {type Game} from '../type/Game';

interface StoreProps {
    games: Game[];
}

export const Store = ({games}: StoreProps) => {

    return (
        <div>
            <Banner games={games} />
            <GenreSections games={games}/>
        </div>
    )
}