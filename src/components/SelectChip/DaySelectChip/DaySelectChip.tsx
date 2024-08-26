import DayChip from './Chip';

interface SelectChipProps {
  options: string[];
  selectedOptions: string[];
  setFormData: (formData: any) => void;
}

export default function DaySelectChip({
  options,
  selectedOptions,
  setFormData,
}: SelectChipProps) {
  const handleChipClick = (thisOption: string) => {
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
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <DayChip
          key={option}
          label={option}
          isSelected={selectedOptions.includes(option)}
          onClick={() => handleChipClick(option)}
        />
      ))}
    </div>
  );
}
