"use client";

import HomePage from '@/components/HomePage';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <HomePage />
      <div className=" p-2 m-8  h-full">
        {/* Small background image when no project is selected */}
        <div className="hidden fixed inset-0 md:flex flex-col items-center justify-center mt-48 -z-10 ">
          <Image
            src="/Brand_logo_2.png" // Replace with the path to your small image
            alt="Background Image"
            width={200} // Adjust the width as needed
            height={200} // Adjust the height as needed
            className=" object-cover"
          />
          <p className="p-2 m-8 text-sm font-orbitron"> Click on a tab to see content</p>
        </div>
      </div>
    </div>
  );
}
