'use client';

import { useState } from 'react';
import UserForm from './UserForm';
import ProgressBar from './ProgressBar';
import { twMerge } from 'tailwind-merge';

export default function Progress() {
  const [step, setStep] = useState(1);
  const [completedForm, setCompletedForm] = useState(0);

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="">
      <ProgressBar step={step} />
      <UserForm
        step={step}
        completedForm={completedForm}
        setCompletedForm={setCompletedForm}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}
