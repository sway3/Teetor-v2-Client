import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import NavLogo from './NavLogo';

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className = '' }: NavBarProps) {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}
