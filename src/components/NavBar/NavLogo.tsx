import Link from 'next/link';
import Logo from '../../../public/icons/Logo';
import { twMerge } from 'tailwind-merge';

interface NavLogoProps {
  className?: string;
  logoSize?: string;
  textSize?: string;
}

export default function NavLogo({
  className = '',
  logoSize = 'w-8 h-8',
  textSize = 'text-xl',
}: NavLogoProps) {
  return (
    <h1>
      <Link
        href="/"
        className={twMerge(`flex gap-1 items-center ${className}`)}
      >
        <Logo className={logoSize} />
        <span className={`font-bold ${textSize}`}>teetor</span>
      </Link>
    </h1>
  );
}
