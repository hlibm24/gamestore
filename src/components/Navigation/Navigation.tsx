import {NavLink, useLocation} from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';

import './Navigation.css';

const hiddenSearchPaths = ['/cart', '/library', '/wallet'];

export const Navigation = () => {
    const location = useLocation();
    const showSearch = !hiddenSearchPaths.includes(location.pathname);
    
    return (
        <header className='header'>
            <div className='header-inner container'>
                <nav className='nav'>
                    <NavLink to='/' end className='nav-link'>Store</NavLink>
                    <NavLink to='/library' className='nav-link'>Library</NavLink>
                    <NavLink to='/wallet' className='nav-link'>Wallet</NavLink>
                </nav>
                {showSearch && <SearchBar />}
            </div>
        </header>
    );
};