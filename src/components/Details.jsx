'use client';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

export default function Details({ selectedProject }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    if (selectedProject?.markdownPath) {
      // Fetch the markdown content from the file when the project is selected
      fetch(selectedProject.markdownPath)
        .then((response) => response.text())
        .then((text) => setMarkdownContent(text))
        .catch((error) => console.error('Failed to load markdown file:', error));
    } else {
      setMarkdownContent(''); // Clear the markdown content when no project is selected
    }
  }, [selectedProject]);

  return (
    <section className="col-span-1 text-foreground rounded shadow hidden md:block ">
      <h2 className="text-xl font-semibold p-2 text-purple-200">DETAILS</h2>

      {selectedProject ? (
        <div className=' p-4 '>
          <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-auto rounded mb-4"
            height="250"
            width="250"
          />
          <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
        </div>
      ) : (
        <p className='p-2'>Select a project to see details.</p>
      )}
    </section>
  );
}
