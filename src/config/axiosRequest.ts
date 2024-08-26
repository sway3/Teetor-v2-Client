import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInterceptor';

export const Get = async (url: string): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(url);
  return response;
};

export const Post = async (url: string, data?: any): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(url, data);
  return response;
};
