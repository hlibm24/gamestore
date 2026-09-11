import { useState, useEffect } from 'react';
import { type Game } from '../type/Game';
import {fetchGames, type GamesError} from './GamesApi.ts' 


export const useGames = () => {
      const [games, setGames] = useState<Game[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<GamesError | null>(null);
    
      useEffect(()=> {
        async function loadGames() {
          setLoading(true);
          setError(null);

          const {data, error} = await fetchGames();

          if(error) {
            setError(error);
          } else {
            setGames(data);
          }

          setLoading(false);
            
        }

        loadGames();

      }, [])

      return {games, loading, error}
}