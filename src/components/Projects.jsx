'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function Projects({ setSelectedProject, selectedProject }) {
  const projects = [
    {
      title: 'VOICE by iAccess Life',
      markdownPath: '/projects/project-a.md',
      image: '/vercel.svg',
    },
    {
      title: 'WRLD CHNGRS',
      markdownPath: '/projects/project-b.md',
      image: '/vercel.svg',
    },
    {
      title: 'YARN ODYSSEY',
      markdownPath: '/projects/project-c.md',
      image: '/vercel.svg',
    },
    {
      title: 'CYGOTH CLUB',
      markdownPath: '/projects/project-c.md',
      image: '/vercel.svg',
    },
    {
      title: 'BIANCHINI ART',
      markdownPath: '/projects/project-c.md',
      image: '/vercel.svg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    if (selectedProject?.markdownPath) {
      fetch(selectedProject.markdownPath)
        .then((response) => response.text())
        .then((text) => setMarkdownContent(text))
        .catch((error) => console.error('Failed to load markdown file:', error));
    }
  }, [selectedProject]);

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setActiveIndex(activeIndex === index ? null : index); // Toggle the dropdown for the selected project
  };

  return (
    <section className="col-span-1 text-foreground rounded shadow border-border border-r border-l h-full">
      <h2 className="text-xl font-semibold p-2 text-purple-200">PROJECTS</h2>

      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            className="cursor-pointer p-4 border-b hover:bg-black md:hover:bg-muted-foreground md:hover:text-black flex flex-col"
            onClick={() => handleProjectClick(project, index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold">{project.title}</span>
              <span className="mr-2">🔍</span>
            </div>

            {/* Mobile dropdown: Only show details for the clicked project */}
            {activeIndex === index && (
              <div className="md:hidden mt-2 p-4 bg-transparent rounded shadow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{selectedProject?.title}</h3>
                </div>
                {selectedProject && (
                  <div>
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto rounded mb-4"
                      height="250"
                      width="250"
                    />

                    {/* Scrollable markdown content */}
                    <div className="max-h-64 overflow-y-auto  p-2 rounded">
                      <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
