import { Get, Post } from '@/config/axiosRequest';
import { AxiosResponse } from 'axios';

export const signUpReq = async (signUpForm: any): Promise<AxiosResponse> => {
  const response = await Post('/v2/user/sign-up', signUpForm);
  return response;
};

export const getSignUpInfoReq = async (): Promise<AxiosResponse> => {
  const response = await Get('/v2/user/sign-up');
  return response;
};
