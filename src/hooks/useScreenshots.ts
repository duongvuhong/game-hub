import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_SCREENSHOTS } from '../constants';
import APIClient from '../services/apiClient';
import Screenshot from '../entities/Screenshot';

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: [CACHE_KEY_SCREENSHOTS, gameId],
    queryFn: apiClient.getAll
  });
};

export default useScreenshots;
