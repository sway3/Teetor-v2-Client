import { useEffect, useState } from 'react';
import DaySelectChip from '../SelectChip/DaySelectChip/DaySelectChip';

interface FormProps {
  formData: any;
  setFormData: (formData: any) => void;
}

export default function Form3({ formData, setFormData }: FormProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dayOptions = [
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  useEffect(() => {
    if (!formData.role.includes('Mentor')) {
      const newFormData = { ...formData };
      delete newFormData.profession;
      delete newFormData.canHelpWith;
      delete newFormData.description;

      setFormData(newFormData);
    }
  }, []);

  return (
    <div className="mt-3">
      <h2 className="text-xl">Which days are you available?</h2>
      <div className="mt-3">
        <DaySelectChip
          options={dayOptions}
          selectedOptions={formData.availableDays}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}
