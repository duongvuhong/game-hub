import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2c3d4dada84d495785efc65474906b4f'
  }
});

interface GetResponse<T> {
  count: number;
  results: T[];
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async () =>
    (await axiosInstance.get<GetResponse<T>>(this.endpoint)).data.results;
}

export default APIClient;
