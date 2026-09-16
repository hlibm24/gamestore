import {Link} from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const Navigation = () => {
    return (
        <nav>
            <Link to='/'>Store</Link>
            <Link to='/library'>Library</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/wallet'>Wallet</Link>
            <SearchBar />
        </nav>
    );
};