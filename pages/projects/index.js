import ProjectsSection from "../../components/ProjectsSection";
import Impact from "../../components/Impact";
import { fetchContent } from "../../api/apiRoot";

export async function getStaticProps() {
  const projects = await fetchContent('externalProject');

  return { props: { projects } };
}

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col">
      <Impact />
      <ProjectsSection projects={projects} />
    </div>
  );
};

export default Projects;
