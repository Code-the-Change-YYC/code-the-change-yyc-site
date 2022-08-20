import Link from "next/link";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

const ICON_SIZE = 30;

/* eslint-disable @next/next/no-img-element */
const ProjectTile = ({ logo, name, liveProjectLink, githubLink, descriptions }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg border-4 border-[#A689FF] p-10 m-10 space-y-2">
      <img alt={name} src={`/images/projects/${logo}`} width={200} />
      <h3 className="font-medium text-xl">{name}</h3>
      <div className="flex space-x-4 italic text-[#7055FD]">
        {liveProjectLink && (
          <Link href={liveProjectLink}>
            <FaExternalLinkSquareAlt size={ICON_SIZE} className="cursor-pointer" />
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink}>
            <FaGithub size={ICON_SIZE} className="cursor-pointer" />
          </Link>
        )}
      </div>
      <ul className="list-disc text-lg w-full">
        {descriptions.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTile;
