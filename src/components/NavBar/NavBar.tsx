import NavLogo from './NavLogo';

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className = '' }: NavBarProps) {
  return (
    <nav className="flex justify-center items-center h-12">
      <NavLogo />
      <ul></ul>
    </nav>
  );
}
