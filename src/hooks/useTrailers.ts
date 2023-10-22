import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TRAILERS } from '../constants';
import APIClient from '../services/apiClient';
import { Trailer } from '../entities/Trailer';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: [CACHE_KEY_TRAILERS, gameId],
    queryFn: apiClient.getAll
  });
};

export default useTrailers;
