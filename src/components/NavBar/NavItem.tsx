import Link from 'next/link';

interface NavItemProps {
  link: string;
  label: string;
}

export default function NavItem({ link, label }: NavItemProps) {
  return (
    <li>
      <Link href={link}>{label}</Link>
    </li>
  );
}
