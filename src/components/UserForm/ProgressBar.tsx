import { twMerge } from 'tailwind-merge';

interface ProgressBarProps {
  step: number;
}

export default function ProgressBar({ step }: ProgressBarProps) {
  const percentage = ((step - 1) / 2) * 100;

  return (
    <div className="relative mt-3 flex items-center justify-between before:absolute before:h-1 before:w-full before:bg-[#ddd]">
      <div
        className="absolute left-0 top-[50%] z-10 h-1 -translate-y-[50%] transform transition-all duration-150 ease-in"
        style={{
          width: `${percentage}%`,
          backgroundColor: step > 1 ? 'green' : '#ddd',
        }}
      />
      <div
        className={twMerge(
          `z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#ddd] ${step >= 1 && `border-green-800 bg-green-800 text-white`}`,
        )}
      >
        1
      </div>
      <div
        className={twMerge(
          `z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#ddd] ${step >= 2 && `border-green-800 bg-green-800 text-white`}`,
        )}
      >
        2
      </div>
      <div
        className={twMerge(
          `z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#ddd] ${step >= 3 && `border-green-800 bg-green-800 text-white`}`,
        )}
      >
        3
      </div>
    </div>
  );
}
