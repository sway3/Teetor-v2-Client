import Logo from '@/components/Logo/Logo';
import NavBar from '@/components/NavBar/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="flex h-16 items-center justify-center md:hidden">
        <Logo />
      </div>
      <NavBar />
      <main className="mb-12 p-5 md:ml-48">{children}</main>
    </div>
  );
}
