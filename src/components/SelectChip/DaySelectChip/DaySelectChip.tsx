'use client';

import { twMerge } from 'tailwind-merge';
import DayChip from './Chip';

interface SelectChipProps {
  options: string[];
  selectedOptions: string[];
  setFormData?: (formData: any) => void;
  editable: boolean;
  className?: string;
}

export default function DaySelectChip({
  options,
  selectedOptions,
  setFormData,
  editable,
  className = '',
}: SelectChipProps) {
  const handleChipClick = (thisOption: string) => {
    if (!editable) return;

    if (setFormData) {
      if (selectedOptions.includes(thisOption)) {
        setFormData((prev: any) => ({
          ...prev,
          availableDays: selectedOptions.filter(
            (option) => option !== thisOption,
          ),
        }));
      } else {
        setFormData((prev: any) => ({
          ...prev,
          availableDays: [...selectedOptions, thisOption],
        }));
      }
    }
  };

  return (
    <div className={twMerge(`flex flex-col gap-2 ${className}`)}>
      {options.map((option) => (
        <DayChip
          key={option}
          label={option}
          isSelected={selectedOptions.includes(option)}
          onClick={() => handleChipClick(option)}
          editable={editable}
        />
      ))}
    </div>
  );
}
