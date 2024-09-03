import Link from 'next/link';
import HomeIcon from '../../../public/icons/HomeIcon';
import MessageIcon from '../../../public/icons/MessageIcon';
import NotifIcon from '../../../public/icons/NotifIcon';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 flex h-14 w-full items-center justify-around border border-t-gray-300 bg-white text-white md:hidden">
      <Link href="/dashboard">
        <HomeIcon className="h-6 w-6 fill-none" />
      </Link>
      <Link href="/messages">
        <MessageIcon className="h-6 w-6" />
      </Link>
      <Link href="/notifications">
        <NotifIcon className="h-6 w-6" />
      </Link>
      <Link href="/profile">
        <NotifIcon className="h-6 w-6" />
      </Link>
    </nav>
  );
}
