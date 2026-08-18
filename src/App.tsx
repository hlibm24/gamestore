import {BrowserRouter} from 'react-router-dom';

import {Navigation} from './components/Navigation';
import { AppRoutes } from './components/AppRoutes';

import {useGames} from './hooks/useGames'

function App() {
  const {games, loading} = useGames();


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <AppRoutes games={games}/>
      </BrowserRouter>
    </>
  )
}

export default App
