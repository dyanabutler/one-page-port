'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-foreground font-orbitron mt-2">
      

      {/* h1 Section with Borders */}
      <div className=" ">
        <Image
          src="/header2.png"
          alt="header image"
          className="w-full h-auto"
          height="78"
          width="2000"
        />
      </div>
    </header>
  );
}
