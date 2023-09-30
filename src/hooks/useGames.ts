import { useInfiniteQuery } from '@tanstack/react-query';
import gameService, { Game } from '../services/gameService';
import { GameQuery } from '../App';
import { CACHE_KEY_GAMES } from '../constants';
import { GetResponse } from '../services/apiClient';

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<GetResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.get({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined
  });

export default useGames;
