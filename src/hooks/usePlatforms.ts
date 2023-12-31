import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { CACHE_KEY_PLATFORMS } from '../constants';
import platformService from '../services/platformService';
import Platform from '../entities/Platform';
import { GetResponse } from '../services/apiClient';
import platforms from '../data/platforms';

const usePlatforms = () =>
  useQuery<GetResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  });

export default usePlatforms;
