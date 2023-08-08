import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'http://3.38.13.139:8081';
const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

axiosClient.interceptors.request.use(async config => {
  if ((await AsyncStorage.getItem('token')) && config.headers) {
    config.headers['Authorization'] = `Bearer ${JSON.parse(
      await AsyncStorage.getItem('token')
    )}`;
  }
  return config;
});
axiosClient.interceptors.response.use(response => {
  return response;
});
