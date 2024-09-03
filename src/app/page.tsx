import GSIButton from '@/components/GoogleSignIn/GSIButton';
import Logo from '@/components/Logo/Logo';
import Slideshow from '@/components/Slideshow/Slideshow';

export default function Home() {
  return (
    <div className="h-[calc(100vh-3rem) relative w-full">
      <Slideshow />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10">
        <Logo className="text-white" logoSize="w-16 h-16" textSize="text-6xl" />
        <h2 className="text-center text-3xl font-extralight text-white">
          Where <span className="font-extrabold">Mentors Inspire</span>,
          <br />
          and <span className="font-extrabold">Mentees Thrive.</span>
          <br />
          <span className="mt-3 block">
            Together, <span className="font-extrabold">We Grow.</span>
          </span>
        </h2>
        <GSIButton />
      </div>
    </div>
  );
}
