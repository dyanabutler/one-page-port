'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section className="col-span-1 p-2 text-foreground rounded shadow">
      <h2 className="text-xl font-semibold mb-2 text-purple-200">ABOUT</h2>

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
        <p>Dyana is an experienced UI/UX designer and a full stack developer in training.</p>
      </div>

      {/* Skills Section with SVG Icons - Only visible on medium screens and larger */}
      <div className=" mt-6 ">
        <h2 className="text-xl  font-semibold mb-4 text-purple-200">Services</h2>
        <ul className=" list-inside  space-y-2">
          <li>Website Creation & Deployment</li>
          <li>Graphic Design & Wireframing</li>
          <li>Product Management</li>
        </ul>
      </div>
    </section>
  );
}
