import { AxiosError, AxiosResponse } from 'axios';
import { Post } from '@/config/axiosRequest';

export const checkAccessToken = async (): Promise<AxiosResponse> => {
  const response = await Post('/v2/auth');
  return response;
};

export const refreshAccessToken = async (): Promise<AxiosResponse> => {
  const response = await Post('/v2/refresh-token');
  return response;
};

export const googleOAuthReq = async (
  payload: Response,
): Promise<AxiosResponse> => {
  const response = await Post('/v2/auth/google-oauth', payload);
  return response;
};
