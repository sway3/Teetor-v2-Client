import { refreshAccessToken } from '@/apis/authAPIs/authAPIs';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

axiosInstance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  req.withCredentials = true;
  return req;
});

// axiosInstance.interceptors.response.use(
//   (res) => res,
//   async (error: AxiosError) => {
//     if (error.response!.status !== 401) {
//       return Promise.reject(error);
//     }

//     try {
//       const response = await refreshAccessToken();
//       return response;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         return Promise.reject(error)
//       }
//     }
//   },
// );

export default axiosInstance;
