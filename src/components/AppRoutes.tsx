import {Routes, Route} from 'react-router-dom';
import {type Game} from '../type/Game';

import { Store } from '../pages/Store';
import { Library } from '../pages/Library';
import { Cart } from '../pages/Cart';
import { Wallet } from '../pages/Wallet';
import { GamePage } from '../pages/GamePage';
import { Page404 } from '../pages/Page404';
import { SearchResults } from '../pages/SearchResults';

interface AppRoutesProps {
    games: Game[];
}

export const AppRoutes = ({games}: AppRoutesProps) => {
    return (
        <Routes>
          <Route path='/' element={<Store games={games} />} />
          <Route path='/library' element={<Library/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/games/:slug' element={<GamePage games={games}/>} />
          <Route path='*' element={<Page404/>}/>
          <Route path='/search' element={<SearchResults games={games}/>} />
        </Routes>
    )
}