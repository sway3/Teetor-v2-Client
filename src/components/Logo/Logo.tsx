import Link from 'next/link';
import LogoIcon from '../../../public/icons/LogoIcon';
import { twMerge } from 'tailwind-merge';

interface NavLogoProps {
  className?: string;
  logoSize?: string;
  textSize?: string;
}

export default function Logo({
  className = '',
  logoSize = 'w-8 h-8',
  textSize = 'text-xl',
}: NavLogoProps) {
  return (
    <h1>
      <Link
        href="/"
        className={twMerge(`flex items-center gap-1 ${className}`)}
      >
        <LogoIcon className={logoSize} />
        <span className={`font-bold ${textSize}`}>teetor</span>
      </Link>
    </h1>
  );
}
