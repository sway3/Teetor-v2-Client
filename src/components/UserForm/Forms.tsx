'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// apis
import { getSignUpInfoReq, signUpReq } from '@/apis/userAPIs';
import { presignedUrlReq } from '@/apis/s3APIs';

// types
import { s3UploadData, UserData } from '@/types/types';
import { uploadToS3Req } from '@/apis/s3APIs';

// components
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

// functions
import {
  isForm1Valid,
  isForm2Valid,
  isForm3Valid,
} from '@/utils/regexFunctions/regex';
import usePresignedUrl from '@/hooks/usePresignedUrl';
import useSignUp from '@/hooks/useSignUp';

interface FormsProps {
  step: number;
  completedForm: number;
  setCompletedForm: (value: number) => void;
  handlePrev: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Forms({
  step,
  completedForm,
  setCompletedForm,
  handlePrev,
  handleNext,
}: FormsProps) {
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

  const { refetchPresignedUrl, isSignupPending } = useSignUp(
    selectedImg!,
    formData!,
  );

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

    refetchPresignedUrl();
  };

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
            {step === 3 ? 'Submit' : 'Next'}
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
            {isSignupPending ? 'Loading..' : 'Submit'}
          </button>
        )}
      </div>
    </form>
  );
}
