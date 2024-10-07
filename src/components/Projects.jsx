'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Projects({ setSelectedProject, selectedProject }) {
  const projects = [
    {
      title: 'VOICE by iAccess Life',
      description: 'The Tech-Powered Feedback Solution for Accessibility',
      image: '/voice.svg',
      services: ['Web Development', 'Brand Kit Design', 'Wireframing'],
      stack: ['Next.JS', 'Webflow', 'CMS'],
      github: "https://github.com/your-project",
      website: "https://voice.iaccess.life"
    },
    {
      title: 'WRLD CHNGRS',
      description: 'WRLD CHNGRS is a platform built for connecting communities with social impact projects.',
      image: '/sticker_logo.png',
      services: ['Front-end Website Development', 'UI/UX Design', 'Community Engagement'],
      stack: ['Figma', 'Next.JS', 'After Effects'],
      github: "https://github.com/",
      website: "https://yarnodyssey.com"
    },
    {
      title: 'YARN ODYSSEY by NOVA',
      description: 'Nova has wares if you have coin! A fullstack e-commerce shop made by me (co-founder).',
      image: '/yarn.png',
      services: ['Full Stack Website Development', 'UI/UX Design', 'Product Management'],
      stack: ['Next.js', 'Prisma', 'Stripe API'],
      github: "https://github.com/your-project",
      website: "https://yarnodyssey.com"
    },
    {
      title: 'CYGOTH CLUB',
      description: 'My own stab at an NFT Collection',
      image: '/cygoth.gif',
      services: ['Digital Art', '', 'Community Engagement'],
      stack: ['Next.js', 'Procreate', 'OpenSea', ],
      github: "https://github.com/your-project",
      website: "https://cygoth.io"
    },
    {
      title: 'MBIANCHINI.ART',
      description: 'My first portfolio creation for a traditional artist. In progress',
      image: '/bianchini.png',
      services: ['Website Development', 'UI/UX Design', 'Community Engagement'],
      stack: ['Next.js', 'Firebase', 'Stripe API'],
      github: "https://github.com/your-project",
      website: "https://mbianchini.art"
    },
   
   
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setActiveIndex(activeIndex === index ? null : index); // Toggle the dropdown for the selected project
  };

  return (
    <section className="col-span-1 text-foreground shadow md:border-border md:border-t md:border-b border-purple-200 h-full   ">
      <h2 className="text-xl font-semibold  text-purple-200 font-orbitron m-4">PROJECTS</h2>

      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            className="cursor-pointer p-1 border-b border-purple-200 hover:bg-black md:hover:bg-muted-foreground md:hover:text-black flex flex-col"
            onClick={() => handleProjectClick(project, index)}
          >
            {/* Project Title */}
            <div className="flex justify-between items-center">
              <span className="font-bold font-orbitron m-6 md:m-4 ">{project.title}</span>
              <span className="mr-2">💠</span>
            </div>

            {/* Mobile dropdown: Only show details for the clicked project on mobile */}
            <div
              className={`md:hidden overflow-hidden transition-all ease-in-out duration-500 ${
                activeIndex === index ? 'h-auto' : 'h-0'
              }`}
            >
              {activeIndex === index && (
                <div className="p-4 bg-transparent rounded shadow">
                  {/* Image and Description */}
                  <div className="flex flex-col mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded mb-4"
                      height="250"
                      width="250"
                    />
                    <p className="text-muted-foreground font-plexmono">{project.description}</p>
                  </div>

                  {/* Services and Stack */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {/* Services */}
                    <div>
                      <h3 className="mb-2 text-purple-200 font-orbitron text-md">Services</h3>
                      <ul className="list-inside space-y-1 font-plexmono text-sm">
                        {project.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div>
                      <h3 className="mb-2 text-purple-200 font-orbitron text-md">Stack</h3>
                      <ul className="list-inside space-y-1 font-plexmono text-sm">
                        {project.stack.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* GitHub and Website Links */}
                  <div className="flex space-x-4 my-4 font-orbitron">
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:underline"
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
                    </a> */}

                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 hover:underline"
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
                          d="M14 11H9m-4 2h5m4 0h5m-5-6h5m-5-2h3m1 8a9 9 0 110-18 9 9 0 010 18z"
                        />
                      </svg>
                      Website
                    </a>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
