import { Game } from '../entities/Game';
import APIClient from './apiClient';

export default new APIClient<Game>('/games');
