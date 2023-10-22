import { Platform } from '../entities/Platform';
import APIClient from './apiClient';

export default new APIClient<Platform>('/platforms/lists/parents');
