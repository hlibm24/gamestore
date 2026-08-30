import {BrowserRouter} from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';

import {Navigation} from './components/Navigation';
import { AppRoutes } from './components/AppRoutes';

import {useGames} from './hooks/useGames'

import { CartProvider } from './context/CartContext';
import { PurchasedProvider } from './context/PurchasedContext';

function App() {
  const {games, loading} = useGames();


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <CartProvider>
        <PurchasedProvider>
        <BrowserRouter>
          <ScrollToTop/>
          <Navigation/>
          <AppRoutes games={games}/>
        </BrowserRouter>
        </PurchasedProvider>
      </CartProvider>
    </>
  )
}

export default App
