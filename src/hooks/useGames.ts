import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import gameService, { Game } from '../services/gameService';
import { CACHE_KEY_GAMES } from '../constants';
import { GetResponse } from '../services/apiClient';
import useGameQueryStore from '../store';

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<GetResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms('24h')
  });
};

export default useGames;
