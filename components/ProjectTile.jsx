import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkSquareAlt, FaGithub, FaAppStoreIos, FaPlayCircle } from 'react-icons/fa';

const ICON_SIZE = 30;

const ProjectTile = ({ logo, name, appStoreLink, playStoreLink, liveProjectLink, githubLink, descriptions }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-3xl border-4 border-[#A689FF] p-10 m-10 space-y-4 drop-shadow-md">
      <div className="w-60">
        <Image alt={name} src={logo} placeholder="blur" layout="responsive" />
      </div>
      <h3 className="font-medium text-xl">{name}</h3>
      <div className="flex space-x-4 italic text-[#7055FD]">
        {appStoreLink && (
          <Link href={appStoreLink} legacyBehavior>
            <FaAppStoreIos size={ICON_SIZE} className="cursor-pointer" />
          </Link>
        )}
        {playStoreLink && (
          <Link href={playStoreLink} legacyBehavior>
            <FaPlayCircle size={ICON_SIZE} className="cursor-pointer" />
          </Link>
        )}
        {liveProjectLink && (
          <Link href={liveProjectLink} legacyBehavior>
            <FaExternalLinkSquareAlt size={ICON_SIZE} className="cursor-pointer" />
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink} legacyBehavior>
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
