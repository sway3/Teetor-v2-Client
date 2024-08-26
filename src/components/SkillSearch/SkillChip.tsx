import DeleteIcon from '../../../public/icons/DeleteIcon';

interface SkillChipProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SkillChip({ label, onClick }: SkillChipProps) {
  return (
    <div className="text-sm w-fit px-3 py-2 rounded-full cursor-pointer bg-green-100">
      <span>{label}</span>
      <button onClick={onClick} className="bg-gray-200 ml-1 p-0.5 rounded-full">
        <DeleteIcon className="w-3 h-3 fill-gray-700" />
      </button>
    </div>
  );
}
