import GSIButton from '@/components/GoogleSignIn/GSIButton';
import NavLogo from '@/components/NavBar/NavLogo';
import Slideshow from '@/components/Slideshow/Slideshow';

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-3rem)">
      <Slideshow />
      <div className="absolute z-20 inset-0 flex flex-col gap-10 items-center justify-center">
        <NavLogo
          className="text-white"
          logoSize="w-16 h-16"
          textSize="text-6xl"
        />
        <h2 className="text-white text-3xl text-center font-extralight">
          Where <span className="font-extrabold">Mentors Inspire</span>,
          <br />
          and <span className="font-extrabold">Mentees Thrive.</span>
          <br />
          <span className="block mt-3">
            Together, <span className="font-extrabold">We Grow.</span>
          </span>
        </h2>
        <GSIButton />
      </div>
    </div>
  );
}
