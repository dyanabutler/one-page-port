import Projects from '../components/Projects';
import { getProjectMarkdown } from '../lib/getProjectMarkdown';

export default function ProjectsPage({ projectsData }) {
  return <Projects projectsData={projectsData} />;
}

export async function getStaticProps() {
  const projectsData = getProjectMarkdown(); // Fetch markdown data

  return {
    props: {
      projectsData,
    },
  };
}
