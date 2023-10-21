import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GAMES } from '../constants';
import gameService from '../services/gameService';

const useGame = (slug: string) =>
  useQuery({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => gameService.get(slug)
  });

export default useGame;
