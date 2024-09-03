import DeleteIcon from '../../../public/icons/DeleteIcon';

interface SkillChipProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SkillChip({ label, onClick }: SkillChipProps) {
  return (
    <div className="w-fit cursor-pointer rounded-full bg-green-100 px-3 py-2 text-sm">
      <span>{label}</span>
      <button onClick={onClick} className="ml-1 rounded-full bg-gray-200 p-0.5">
        <DeleteIcon className="h-3 w-3 fill-gray-700" />
      </button>
    </div>
  );
}
