'use client';

import { useRouter } from 'next/navigation';
import {
  getSignUpInfoReq,
  presignedUrlReq,
  signUpReq,
} from '@/apis/userAPIs/userAPIs';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import {
  isForm1Valid,
  isForm2Valid,
  isForm3Valid,
} from '@/utils/regexFunctions/regex';
import { twMerge } from 'tailwind-merge';

// types
import { s3UploadData, UserData } from '@/types/types';
import { uploadToS3Req } from '@/apis/s3APIs/s3APIs';

interface UserFormProps {
  step: number;
  completedForm: number;
  setCompletedForm: (value: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

export default function UserForm({
  step,
  completedForm,
  setCompletedForm,
  handlePrev,
  handleNext,
}: UserFormProps) {
  const [formData, setFormData] = useState<UserData | null>(null);
  const [selectedImg, setSelectedImg] = useState<File | null>(null);

  const { data, isPending, isError } = useQuery({
    queryKey: ['signup'],
    queryFn: () => getSignUpInfoReq(),
  });

  useEffect(() => {
    setFormData({
      googleSub: data?.data.sub,
      firstName: data?.data.firstName,
      lastName: data?.data.lastName,
      email: data?.data.email,
      imgKey: '',
      birthday: '',
      role: [],
      mentorProfession: [],
      availableDays: [],
      mentorCanHelpWith: [],
      mentoringArchive: [],
      description: '',
      connections: [],
    });
  }, [data]);

  useEffect(() => {
    if (formData) {
      switch (step) {
        case 1:
          if (isForm1Valid(formData, selectedImg)) setCompletedForm(1);
          else setCompletedForm(0);
          break;
        case 2:
          if (isForm2Valid(formData)) setCompletedForm(2);
          else setCompletedForm(1);
          break;
        case 3:
          if (isForm3Valid(formData)) setCompletedForm(3);
          else setCompletedForm(2);
          break;
      }
    }
  }, [formData, selectedImg, step]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(newFormData);
  };

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData || !selectedImg) return;

    refetch();
  };

  const {
    data: presignedData,
    isPending: presignedPending,
    refetch,
  } = useQuery({
    queryKey: ['s3url', selectedImg?.name],
    queryFn: () => {
      if (selectedImg) return presignedUrlReq(selectedImg?.name);
      // return Promise.reject(new Error('Selected image is not available'));
    },
    enabled: false,
    retry: false,
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

  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: (formData: UserData) => signUpReq(formData),
    onSuccess: () => {
      router.push('/dashboard');
    },
  });

  const S3UploadMutation = useMutation({
    mutationFn: (uploadData: s3UploadData) => uploadToS3Req(uploadData),
    onSuccess: () => {},
  });

  return (
    <form className="">
      {step === 1 && (
        <Form1
          formData={formData}
          handleFormChange={handleFormChange}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
      {step === 2 && (
        <Form2
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
        />
      )}
      {step === 3 && <Form3 formData={formData} setFormData={setFormData} />}
      <div className="mt-5 flex justify-between">
        <button
          onClick={handlePrev}
          className={`cursor-pointer rounded-xl bg-green-800 px-5 py-2 text-white ${step > 1 ? 'block' : 'invisible'}`}
        >
          Prev
        </button>
        {completedForm !== 3 ? (
          <button
            onClick={handleNext}
            className={twMerge(
              `rounded-xl px-5 py-2 ${completedForm === step ? 'cursor-pointer bg-green-800 text-white' : 'cursor-not-allowed bg-gray-300'}`,
            )}
            disabled={completedForm === step ? false : true}
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleFormSubmit}
            className={twMerge(
              `rounded-xl px-5 py-2 ${completedForm === 3 ? 'cursor-pointer bg-green-800 text-white' : 'cursor-not-allowed bg-gray-300'}`,
            )}
            disabled={completedForm === 3 ? false : true}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
