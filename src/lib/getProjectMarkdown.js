// lib/getProjectMarkdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getProjectMarkdown = () => {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames.map((fileName) => {
    const filePath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Parse the markdown file and extract the frontmatter (title) and content
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title || fileName.replace(/\.md$/, ''),
      content,
    };
  });

  return projects;
};
