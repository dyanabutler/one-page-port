'use client';
import Image from 'next/image';
import Footer from './Footer';

export default function About() {
  return (
    <>
    <section className="col-span-1 pb-8 px-8 pt-4 text-foreground shadow ">
      <h2 className="text-xl font-semibold font-orbitron mb-2 text-purple-200">ABOUT</h2>

      {/* Flex container to align image and text side by side */}
      <div className="flex items-start mb-4">
        {/* Image as an icon */}
        <Image
          src="/biopic2.png"
          alt="biopic"
          className="h-20 w-20 rounded-sm mr-4" // Icon size and margin-right for spacing
          height="250"
          width="250"
        />

        {/* Text next to the image */}
        <p className='font-plexmono' >Dyana is an experienced UI/UX designer and a full stack developer in training.<br></br> <br></br>i like to draw album art for fun</p>
      </div>

      {/* Skills Section with SVG Icons - Only visible on medium screens and larger */}
      <div className=" mt-6 ">
        <h2 className="text-xl font-orbitron mb-4 text-purple-200">Services</h2>
        <ul className=" list-inside font-plexmono space-y-2">
          <li>Website Creation & Deployment</li>
          <li>Graphic Design & Wireframing</li>
          <li>Product Management</li>
          <li>Cartoonist</li>
        </ul>
      </div>
      <a href="/gallery" >
          <button className="px-4 py-2 mt-4 w-full text-white text-lg font-orbitron font-semibold rounded-none border border-indigo-700 shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            View Gallery
          </button>
        </a>

     
    </section>
    
    </>
  );
}
