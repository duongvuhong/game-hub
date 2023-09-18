import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface GetGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErorr] = useState('');

  useEffect(() => {
    apiClient
      .get<GetGameResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((error) => setErorr(error.message));
  });

  return (
    <>
      {error && <div className='text-danger'>{error}</div>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
