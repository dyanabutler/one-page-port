'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Importing Framer Motion

export default function Projects({ setSelectedProject,  }) {
  const projects = [
    {
      title: 'VOICE by iAccess Life',
      description: 'The tech-driven feedback solution for accessibility',
      image: '/voice.svg',
      services: ['UI/UX Design', 'Web Development', 'Branding'],
      stack: ['Next.JS', 'Webflow', 'CMS'],
      github: "https://github.com/your-project",
      website: "https://voice.iaccess.life",
      bgColor: '#000',
    },
    {
      title: 'YARN ODYSSEY by NOVA',
      description: 'An online store showcasing Novas crochet creations.',
      image: 'https://res.cloudinary.com/dyanabutler/image/upload/v1728506646/yarn-odyssey-banner_nn85p7.png',
      services: ['UI/UX Design', 'Web Development', 'Product Management'],
      stack: ['Next.js', 'Prisma', 'Stripe API'],
      github: "https://github.com/your-project",
      website: "https://yarnodyssey.com",
      bgColor: '#000'
    },
    {
      title: 'WRLD CHNGRS',
      description: 'A unique NFT universe with a character builder feature',
      image: 'https://res.cloudinary.com/dyanabutler/image/upload/v1728506646/wrld-chngrs-banner_pphxde.png',
      services: ['UI/UX Design', 'Wireframing', 'Graphic Design'],
      stack: ['Figma', 'Digital Art', 'Adobe'],
      github: "https://github.com/",
      website: "https://wrld-chngrs.com",
      bgColor: '#000'
    },
    {
      title: 'CYGOTH CLUB',
      description: 'My take on creating an NFT collection',
      image: 'https://res.cloudinary.com/dyanabutler/image/upload/v1728506644/cygoth-club-banner_c52oxe.png',
      services: ['Web Development', 'Digital Art', 'Cartoonist'],
      stack: ['Next.js', 'Procreate', 'OpenSea', ],
      github: "https://github.com/your-project",
      website: "https://cygoth.io",
      bgColor: '#1a202c'
    },
    
    {
      title: 'ARC-H1VE',
      description: 'A licensing platform for musicians and visual artists.',
      image: 'https://res.cloudinary.com/dyanabutler/image/upload/v1728506643/archive-banner_xvyiys.png',
      services: ['Web Development', 'Digital Art', 'Animation'],
      stack: ['Next.js', 'Procreate', 'Typescript', ],
      github: "https://github.com/your-project",
      website: "https://archiveit.xyz",
      bgColor: '#000'
    },
    {
      title: 'DUKEMEDIA.CO',
      description: 'A portfolio site for a creative videographer, photographer, and filmmaker',
      image: 'https://res.cloudinary.com/dyanabutler/image/upload/v1728506644/duke-media-banner_ajdfxi.png',
      services: ['Website Development', 'UI/UX Design', 'Wireframing'],
      stack: ['Webflow', 'Figma', 'CMS'],
      github: "https://github.com/your-project",
      website: "https://dukemedia.co",
      bgColor: '#000'
    },
    {
      title: 'MBIANCHINI.ART',
      description: 'A personal portfolio for a distinctive traditional mixed-media artist',
      image: 'https://res.cloudinary.com/dyanabutler/image/upload/v1728506645/mbianchini-banner_z5qklj.png',
      services: ['UI/UX Design', 'Web Development', 'Videographer'],
      stack: ['Next.js', 'Stripe Payments API'],
      github: "https://github.com/your-project",
      website: "https://mbianchini.art",
      bgColor: '#1a202c'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setActiveIndex(activeIndex === index ? null : index); // Toggle the dropdown for the selected project
  };

  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
  };

  return (
    <section className="col-span-1 text-foreground shadow md:border-border md:border-t md:border-b p-8 border-purple-200 h-full">
      <h2 className="text-xl font-semibold text-purple-200 font-orbitron m-4">PROJECTS</h2>

      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            className="cursor-pointer p-1 border-b border-purple-200 hover:bg-black md:hover:bg-muted-foreground md:hover:text-black flex flex-col"
            onClick={() => handleProjectClick(project, index)}
          >
            {/* Project Title */}
            <div className="flex justify-between items-center">
              <span className="font-bold font-orbitron m-6 md:m-4">{project.title}</span>
              <span className="mr-2">💠</span>
            </div>

            {/* Mobile dropdown with slide-down animation */}
            <motion.div
              className="md:hidden overflow-hidden"
              initial="hidden"
              animate={activeIndex === index ? 'visible' : 'hidden'}
              variants={dropdownVariants}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
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
                    <div>
                      <h3 className="mb-2 text-purple-200 font-orbitron text-md">Services</h3>
                      <ul className="list-inside space-y-1 font-plexmono text-sm">
                        {project.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
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
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
}
