import {BrowserRouter} from 'react-router-dom';

import {Navigation} from './components/Navigation';
import { AppRoutes } from './components/AppRoutes';

import {useGames} from './hooks/useGames'

import { CartProvider } from './context/CartContext';

function App() {
  const {games, loading} = useGames();


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navigation/>
          <AppRoutes games={games}/>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
