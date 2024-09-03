'use client';

import { useState } from 'react';
import Forms from './Forms';
import ProgressBar from './ProgressBar';

export default function UserForm() {
  const [step, setStep] = useState(1);
  const [completedForm, setCompletedForm] = useState(0);

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="">
      <ProgressBar step={step} />
      <Forms
        step={step}
        completedForm={completedForm}
        setCompletedForm={setCompletedForm}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}
