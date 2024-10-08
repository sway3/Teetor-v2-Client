import { Get, Put } from '@/config/axiosRequest';
import { s3UploadData } from '@/types/types';
import { AxiosResponse } from 'axios';

export const uploadToS3Req = async (
  uploadData: s3UploadData,
): Promise<AxiosResponse> => {
  const { url, file } = uploadData;
  const response = await Put(url, file);
  return response;
};

export const presignedUrlReq = async (
  fileName: string,
): Promise<AxiosResponse> => {
  const response = await Get(`/v2/presigned-url/${fileName}`);
  return response;
};
