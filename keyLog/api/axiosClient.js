import axios from 'axios';

const BASE_URL =  'http:10.0.2.2:8083';
export const axiosClient = axios.create({baseURL:BASE_URL});

axiosClient.interceptors.response.use((response)=>{
    return response.data
});