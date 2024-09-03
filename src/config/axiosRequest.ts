import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInterceptor';

export const Get = async (url: string): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(url);
  return response;
};

export const Post = async (
  url: string,
  data?: any,
  headers = {},
): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(url, data, headers);
  return response;
};

export const Put = async (url: string, data: any, headers = {}) => {
  const response = await axiosInstance.put(url, data, headers);
  return response;
};
