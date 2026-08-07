import {useState, useEffect} from 'react';
import {type Game} from '../type/Game'

export const useGames = () => {
      const [games, setGames] = useState<Game[]>([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(()=> {
        fetch('http://localhost:3000/games')
          .then((res) => res.json())
          .then((data) => {
            setGames(data);
            setLoading(false);
          })
      }, [])

      return {games, loading}
}