import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GENRES } from '../constants';
import genreService, { Genre } from '../services/genreService';
import { GetResponse } from '../services/apiClient';
import genres from '../data/genres';

const useGenres = () =>
  useQuery<GetResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.get,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres
  });

export default useGenres;
