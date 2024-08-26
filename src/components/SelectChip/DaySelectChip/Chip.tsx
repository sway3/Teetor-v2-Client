interface ChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function DayChip({ label, isSelected, onClick }: ChipProps) {
  return (
    <div
      onClick={onClick}
      className={`text-center text-sm w-full py-4 rounded-lg cursor-pointer text-gray-800 ${isSelected ? 'bg-green-100' : 'bg-gray-200'}`}
    >
      <span>{label}</span>
    </div>
  );
}
