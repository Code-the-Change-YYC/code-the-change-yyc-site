import Heading from "../../components/Heading";
import ProjectTile from "../../components/ProjectTile";
import { projects } from "../../data/projects";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col bg-[#7055FD] px-10 md:px-24 lg:px-48 w-full py-20">
      <Heading classes="text-white">Our Projects</Heading>
      <div className="grid grid-cols-2 py-8">
        {projects.map((project) => (
          <ProjectTile key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
