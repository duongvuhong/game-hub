import { useQuery } from '@tanstack/react-query';
import gameService, { Game } from '../services/gameService';
import { GameQuery } from '../App';
import { CACHE_KEY_GAMES } from '../constants';

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      gameService.get({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      })
  });

export default useGames;
