import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_PLATFORMS } from '../constants';
import platformService, { Platform } from '../services/platformService';
import { GetResponse } from '../services/apiClient';
import platforms from '../data/platforms';

const usePlatforms = () =>
  useQuery<GetResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.get,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
  });

export default usePlatforms;
