import { Banner } from "../components/Banner";
import {useGames} from '../hooks/newGames';

export const Store = () => {
    const {games} = useGames();
    return (
        <div>
            <Banner games={games} />
        </div>
    )
}