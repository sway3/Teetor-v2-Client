interface ChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function Chip({ label, isSelected, onClick }: ChipProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center text-sm w-full py-4 rounded-full cursor-pointer ${isSelected ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-800'}`}
    >
      <span>{label}</span>
    </div>
  );
}
