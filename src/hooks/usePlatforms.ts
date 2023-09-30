import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_PLATFORMS } from '../constants';
import platformService, { Platform } from '../services/platformService';

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.get,
    staleTime: 24 * 60 * 60 * 1000
  });

export default usePlatforms;
