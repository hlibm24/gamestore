import { useState, useEffect } from 'react';
import { type Game } from '../type/Game';
import {fetchGames, type GamesError} from '../utils/gamesApi' 


export const useGames = () => {
      const [games, setGames] = useState<Game[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<GamesError | null>(null);

    
      useEffect(()=> {
        const controller = new AbortController();

        async function loadGames() {
          setLoading(true);
          setError(null);

          try {
            const {data, error} = await fetchGames(controller.signal);
  
            if(error) {
              setError(error);
            } else {
              setGames(data);
            }
  
            setLoading(false);

          }catch (err) {
          if(err instanceof DOMException && err.name === 'AbortError') {
            return;
          }
          throw err;
        }
        }

        loadGames();

        return () => {
          controller.abort();
        }

      }, [])

      return {games, loading, error}
}