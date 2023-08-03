import axios from 'axios';

const BASE_URL = 'http:///3.38.13.139:8081';
export const axiosClient = axios.create({ baseURL: BASE_URL });

axiosClient.interceptors.response.use(response => {
  return response.data;
});
