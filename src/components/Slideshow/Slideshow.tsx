'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imgPaths = [
    '/images/slideshow/slideshow1.jpg',
    '/images/slideshow/slideshow2.jpg',
    '/images/slideshow/slideshow3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imgPaths.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] w-full">
      {imgPaths.map((imgPath: string, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
        >
          <Image
            src={imgPath}
            alt={`Slide ${index}`}
            fill
            objectFit="cover"
            className="brightness-[.35]"
          />
        </div>
      ))}
    </div>
  );
}
