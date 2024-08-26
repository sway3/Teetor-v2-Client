'use client';

import { useRouter } from 'next/navigation';
import { getSignUpInfoReq, signUpReq } from '@/apis/userAPIs/userAPIs';
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
  const [formData, setFormData] = useState({});

  const { data, isPending, isError } = useQuery({
    queryKey: ['signup'],
    queryFn: () => getSignUpInfoReq(),
  });

  useEffect(() => {
    setFormData({
      ...formData,
      googleSub: data?.data.sub,
      firstName: data?.data.firstName,
      lastName: data?.data.lastName,
      email: data?.data.email,
      role: [],
      profession: [],
      availableDays: [],
      canHelpWith: [],
    });
  }, [data]);

  useEffect(() => {
    switch (step) {
      case 1:
        if (isForm1Valid(formData)) setCompletedForm(1);
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
  }, [formData, step]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(newFormData);
  };

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    mutation.mutate(formData);
  };

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (signUpForm: any) => signUpReq(signUpForm),
    onSuccess: () => {
      router.push('/dashboard');
    },
  });

  return (
    <form className="">
      {step === 1 && (
        <Form1 formData={formData} handleFormChange={handleFormChange} />
      )}
      {step === 2 && (
        <Form2
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
        />
      )}
      {step === 3 && <Form3 formData={formData} setFormData={setFormData} />}
      <div className="flex justify-between mt-5">
        <button
          onClick={handlePrev}
          className={`cursor-pointer py-2 px-5 bg-green-800 text-white rounded-xl ${step > 1 ? 'block' : 'invisible'}`}
        >
          Prev
        </button>
        {completedForm !== 3 ? (
          <button
            onClick={handleNext}
            className={twMerge(
              `py-2 px-5 rounded-xl ${completedForm === step ? 'bg-green-800 text-white cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`,
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
              `py-2 px-5 rounded-xl ${completedForm === 3 ? 'bg-green-800 text-white cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`,
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
