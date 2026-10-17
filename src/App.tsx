import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';

import { Navigation } from './components/Navigation/Navigation';
import {Footer} from './components/Footer/Footer';
import { AppRoutes } from './components/AppRoutes';
import { BuyModalHost } from './components/BuyModalHost';
import { Spinner } from './components/Spinner/Spinner';
import { StatusMessage } from './components/StatusMessage/StatusMessage';

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
      <StatusMessage text={error.message}>
        <button onClick={refetch} className="btn btn-muted">Try again</button>
      </StatusMessage>
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
