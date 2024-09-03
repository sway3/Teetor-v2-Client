'use client';

import { useEffect, useState } from 'react';
import usePresignedUrl from './usePresignedUrl';
import { useMutation } from '@tanstack/react-query';
import { s3UploadData, UserData } from '@/types/types';
import { uploadToS3Req } from '@/apis/s3APIs';
import { signUpReq } from '@/apis/userAPIs';
import { useRouter } from 'next/navigation';

export default function useSignUp(selectedImg: File, formData: UserData) {
  const [isSignupPending, setIsPending] = useState(false);

  const router = useRouter();

  const { presignedData, presignedPending, refetchPresignedUrl } =
    usePresignedUrl(selectedImg);

  const S3UploadMutation = useMutation({
    mutationFn: (uploadData: s3UploadData) => uploadToS3Req(uploadData),
    onSuccess: () => {},
  });

  const signUpMutation = useMutation({
    mutationFn: (formData: UserData) => signUpReq(formData),
    onSuccess: () => {
      router.push('/dashboard');
    },
  });

  useEffect(() => {
    const s3 = async () => {
      if (presignedData && selectedImg) {
        const url = presignedData.data.presignedUrl;
        const imgKey = presignedData.data.imgKey;

        const response = await S3UploadMutation.mutateAsync({
          url: url,
          file: selectedImg,
        });

        if (!formData) return;

        const newFormData = {
          ...formData,
          imgKey: imgKey,
        };

        if (response) {
          signUpMutation.mutate(newFormData);
        }
      }
    };

    s3();
  }, [presignedData]);

  useEffect(() => {
    if (presignedData) {
      setIsPending(true);
    }

    if (signUpMutation.isSuccess) {
      setIsPending(false);
    }
  }, [presignedPending, signUpMutation.isSuccess]);

  return { refetchPresignedUrl, isSignupPending };
}
