interface ChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function Chip({ label, isSelected, onClick }: ChipProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-flex w-full cursor-pointer items-center justify-center rounded-full py-4 text-sm ${isSelected ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-800'}`}
    >
      <span>{label}</span>
    </div>
  );
}
