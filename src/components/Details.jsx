'use client';
import Image from 'next/image';

export default function Details({ selectedProject }) {
  if (!selectedProject) {
    return <p className="p-2 m-8 font-orbitron">Select a project to see details.</p>;
  }

  return (
    <section className="hidden md:block col-span-1 text-foreground border shadow p-6 h-full">
     <h2 className="text-xl font-semibold font-orbitron mb-2 text-purple-200">DETAILS</h2>
     <div className="h-full flex flex-col">
        {/* Scrollable content */}
        <div className="flex-grow max-h-[50vh] md:max-h-[50vh] lg:max-h-[49vh] lg-plus:max-h-[55vh]  custom-scrollbar overflow-y-auto">
          {/* Title */}
          <h2 className="text-lg font-bold font-orbitron mb-4 ">{selectedProject.title}</h2>

          {/* Image (now underneath the title, full width) */}
          <div className="flex justify-center items-center w-full  mb-4">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto rounded"
              height={250}
              width={600} // Adjusted width and height for better scaling
            />
          </div>

          {/* Description (underneath the image) */}
          <p className="text-md font-plexmono mb-6 ">{selectedProject.description}</p>

          {/* Services and Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Services */}
            <div>
              <h3 className="text-md md:text-lg font-semibold mb-2 font-orbitron text-purple-200">Services</h3>
              <ul className=" list-inside space-y-1 text-sm md:text-lg font-plexmono">
                {selectedProject.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-md md:text-lg font-semibold mb-2 font-orbitron text-purple-200">Stack</h3>
              <ul className=" list-inside space-y-1 text-sm md:text-lg font-plexmono">
                {selectedProject.stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Links (GitHub and Website) */}
        <div className="mt-4 font-orbitron">
          <div className="flex space-x-2 ">
            {/* GitHub link with SVG */}
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  text-white hover:underline "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.683-.217.683-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.153-1.11-1.46-1.11-1.46-.907-.62.068-.608.068-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.912.832.09-.647.35-1.089.636-1.34-2.22-.252-4.555-1.112-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.447-1.27.097-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.797a9.566 9.566 0 012.505.338c1.909-1.294 2.75-1.026 2.75-1.026.544 1.377.2 2.394.098 2.647.64.699 1.03 1.591 1.03 2.682 0 3.841-2.338 4.687-4.565 4.934.359.31.678.92.678 1.854 0 1.338-.012 2.417-.012 2.746 0 .267.181.576.688.478C19.14 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              Git
            </a>

            {/* Website link with SVG */}
            <a
              href={selectedProject.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  text-green-500 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
               <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/>
              </svg>
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
