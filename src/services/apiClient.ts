import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2c3d4dada84d495785efc65474906b4f'
  }
});

export interface GetResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (requestConfig?: AxiosRequestConfig) =>
    (await axiosInstance.get<GetResponse<T>>(this.endpoint, requestConfig))
      .data;
}

export default APIClient;
