import Link from 'next/link';
import NavLogo from '../Logo/Logo';

export default function DesktopNav() {
  return (
    <nav className="fixed top-0 hidden h-full w-48 flex-col bg-white p-3 text-black md:flex">
      <NavLogo />
      <Link href="/dashboard">Home</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/notifications">Notifications</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
