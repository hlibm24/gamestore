import { Banner } from "../components/Banner";
import { GenreSections } from "../components/GamesByGenre";
import {useGames} from '../hooks/useGames';

export const Store = () => {
    const {games} = useGames();
    return (
        <div>
            <Banner games={games} />
            <GenreSections games={games}/>
        </div>
    )
}