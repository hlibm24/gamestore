import {Routes, Route} from 'react-router-dom';
import {type Game} from '../type/Game';

import { Store } from '../pages/Store';
import { Library } from '../pages/Library';
import { Cart } from '../pages/Cart';
import { GamePage } from '../pages/GamePage';
import { Page404 } from '../pages/Page404';

interface AppRoutesProps {
    games: Game[];
}

export const AppRoutes = ({games}: AppRoutesProps) => {
    return (
        <Routes>
          <Route path='/' element={<Store games={games} />} />
          <Route path='/library' element={<Library/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/games/:slug' element={<GamePage games={games}/>} />
          <Route path='*' element={<Page404/>}/>
        </Routes>
    )
}