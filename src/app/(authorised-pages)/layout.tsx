import Logo from '@/components/Logo/Logo';
import NavBar from '@/components/NavBar/NavBar';
import NavLogo from '@/components/NavBar/NavLogo';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Logo />
      <NavBar />
      <main className="mb-12 p-5 md:ml-48">{children}</main>
    </div>
  );
}
