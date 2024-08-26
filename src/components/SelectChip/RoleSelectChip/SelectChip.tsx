import { ChangeEventHandler } from 'react';
import Chip from './Chip';

interface SelectChipProps {
  options: string[];
  selectedOptions: string[];
  setFormData: (formData: any) => void;
}

export default function SelectChip({
  options,
  selectedOptions,
  setFormData,
}: SelectChipProps) {
  const handleChipClick = (thisOption: string) => {
    if (selectedOptions.includes(thisOption)) {
      setFormData((prev: any) => ({
        ...prev,
        role: selectedOptions.filter((option) => option !== thisOption),
      }));
    } else {
      setFormData((prev: any) => ({
        ...prev,
        role: [...selectedOptions, thisOption],
      }));
    }
  };

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <Chip
          key={option}
          label={option}
          isSelected={selectedOptions.includes(option)}
          onClick={() => handleChipClick(option)}
        />
      ))}
    </div>
  );
}
