import { refreshAccessToken } from '@/apis/authAPIs';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

axiosInstance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  req.withCredentials = true;
  return req;
});

export default axiosInstance;
