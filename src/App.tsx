import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';

import { Navigation } from './components/Navigation/Navigation';
import {Footer} from './components/Footer/Footer';
import { AppRoutes } from './components/AppRoutes';
import { BuyModalHost } from './components/BuyModalHost';
import { Spinner } from './components/Spinner/Spinner';

import { useGames } from './hooks/useGames';

import { GamesProvider } from './context/GamesContext';
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
      <GamesProvider games={games}>
        <CartProvider>
          <PurchasedProvider>
            <WalletProvider>
              <BuyModalProvider>

                <BrowserRouter>
                  <ScrollToTop/>
                  <Navigation/>

                  <main>
                    <AppRoutes games={games}/>
                  </main>

                  <Footer/>
                  <BuyModalHost/>
                </BrowserRouter>

              </BuyModalProvider>
            </WalletProvider>
          </PurchasedProvider>
        </CartProvider>
      </GamesProvider>
    </>
  )
}

export default App
