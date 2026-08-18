import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {useState, useEffect} from 'react';
import {Store, Library, GamePage, Cart} from './pages';
// import {type Game} from './type/Game'

import {Navigation} from './components/Navigation';

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
        <Routes>
          <Route path='/' element={<Store games={games} />} />
          <Route path='/library' element={<Library/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/games/:slug' element={<GamePage/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
