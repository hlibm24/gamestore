import {Link, useLocation} from 'react-router-dom';
import { SearchBar } from './SearchBar';

const hiddenSearchPaths = ['/cart', '/library', '/wallet'];

export const Navigation = () => {
    const location = useLocation();
    const showSearch = !hiddenSearchPaths.includes(location.pathname);
    
    return (
        <nav>
            <Link to='/'>Store</Link>
            <Link to='/library'>Library</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/wallet'>Wallet</Link>
            {showSearch && <SearchBar />}
        </nav>
    );
};