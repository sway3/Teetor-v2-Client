import { twMerge } from 'tailwind-merge';

interface ProgressBarProps {
  step: number;
}

export default function ProgressBar({ step }: ProgressBarProps) {
  const percentage = ((step - 1) / 2) * 100;

  return (
    <div className="mt-3 flex justify-between items-center relative before:absolute before:bg-[#ddd] before:h-1 before:w-full">
      <div
        className="absolute top-[50%] left-0 transform -translate-y-[50%] h-1 z-10 transition-all duration-150 ease-in"
        style={{
          width: `${percentage}%`,
          backgroundColor: step > 1 ? 'green' : '#ddd',
        }}
      />
      <div
        className={twMerge(
          `bg-[#ddd] w-7 h-7 flex justify-center items-center rounded-full z-20 ${step >= 1 && `border-green-800 text-white bg-green-800`}`,
        )}
      >
        1
      </div>
      <div
        className={twMerge(
          `bg-[#ddd] w-7 h-7 flex justify-center items-center rounded-full z-20 ${step >= 2 && `border-green-800 text-white bg-green-800`}`,
        )}
      >
        2
      </div>
      <div
        className={twMerge(
          `bg-[#ddd] w-7 h-7 flex justify-center items-center rounded-full z-20 ${step >= 3 && `border-green-800 text-white bg-green-800`}`,
        )}
      >
        3
      </div>
    </div>
  );
}
