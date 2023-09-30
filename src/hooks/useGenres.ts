import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GENRES } from '../constants';
import genreService, { Genre } from '../services/genreService';

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.get,
    staleTime: 24 * 60 * 60 * 1000
  });

export default useGenres;
