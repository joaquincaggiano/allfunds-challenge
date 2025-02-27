import axios from 'axios';

export const newsApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});
