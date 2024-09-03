interface ChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  editable: boolean;
}

export default function DayChip({
  label,
  isSelected,
  onClick,
  editable,
}: ChipProps) {
  return (
    <div
      onClick={editable ? onClick : undefined}
      className={`w-full rounded-lg py-4 text-center text-sm text-gray-800 ${isSelected ? 'bg-green-100' : 'bg-gray-200'} ${editable ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <span>{label}</span>
    </div>
  );
}
