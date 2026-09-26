import {Link, useLocation} from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';

import './Navigation.css';

const hiddenSearchPaths = ['/cart', '/library', '/wallet'];

export const Navigation = () => {
    const location = useLocation();
    const showSearch = !hiddenSearchPaths.includes(location.pathname);
    
    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='nav-links'>
                    <Link to='/' className='nav-link'>Store</Link>
                    <Link to='/library' className='nav-link'>Library</Link>
                    <Link to='/cart' className='nav-link'>Cart</Link>
                    <Link to='/wallet' className='nav-link'>Wallet</Link>
                </div>
                {showSearch && <SearchBar />}
            </div>
        </nav>
    );
};