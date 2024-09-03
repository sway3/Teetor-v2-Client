import { Get, Post } from '@/config/axiosRequest';
import { UserData } from '@/types/types';
import { AxiosResponse } from 'axios';
import { headers } from 'next/headers';

export const signUpReq = async (formData: UserData): Promise<AxiosResponse> => {
  const response = await Post('/v2/user/sign-up', formData);
  return response;
};

export const getSignUpInfoReq = async (): Promise<AxiosResponse> => {
  const response = await Get('/v2/user/sign-up');
  return response;
};

export const getUserInfoReq = async (): Promise<AxiosResponse> => {
  const response = await Get('/v2/user');
  return response;
};

export const presignedUrlReq = async (
  fileName: string,
): Promise<AxiosResponse> => {
  const response = await Get(`/v2/presigned-url/${fileName}`);
  return response;
};
