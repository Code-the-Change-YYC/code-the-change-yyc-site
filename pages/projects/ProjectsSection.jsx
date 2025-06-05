import Heading from "../../components/Heading";
import ProjectTile from "../../components/ProjectTile";
import { projects } from "../../data/projects";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col bg-[#7055FD] px-2 md:px-18 lg:px-36 w-full py-20">
      <Heading classes="text-white" width="w-1/10">Our Projects</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-8">
        {projects.map((project) => (
          <ProjectTile key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
