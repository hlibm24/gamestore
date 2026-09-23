import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';

import { Navigation } from './components/Navigation';
import { AppRoutes } from './components/AppRoutes';
import { BuyModalHost } from './components/BuyModalHost';
import { Spinner } from './components/Spinner/Spinner';

import {useGames} from './hooks/useGames';

import { CartProvider } from './context/CartContext';
import { PurchasedProvider } from './context/PurchasedContext';
import { WalletProvider } from './context/WalletContext';
import { BuyModalProvider } from './context/BuyModalContext';

function App() {
  const {games, loading, error, refetch} = useGames();


  if (loading) {
    return <Spinner />;
  }

  if(error) {
    return (
      <div>
        <p>{error.message}</p>
        <button onClick={refetch}>Try again</button>
      </div>
    )
  }

  return (
    <>
      <CartProvider>
        <PurchasedProvider>
          <WalletProvider>
            <BuyModalProvider>

              <BrowserRouter>
                <ScrollToTop/>
                <Navigation/>
                <AppRoutes games={games}/>
                <BuyModalHost/>
              </BrowserRouter>

            </BuyModalProvider>
          </WalletProvider>
        </PurchasedProvider>
      </CartProvider>
    </>
  )
}

export default App
