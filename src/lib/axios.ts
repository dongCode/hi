import axios from 'axios';


import { BASE_URL } from '@/features/auth/constants';

export const axiosInstance  = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use();
axiosInstance.interceptors.response.use();
