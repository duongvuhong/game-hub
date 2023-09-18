import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2c3d4dada84d495785efc65474906b4f'
  }
});
