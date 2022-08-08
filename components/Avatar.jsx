import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const PROFILE_CONTAINER = "flex flex-col items-center m-10";

const Avatar = ({ name, file, position, linkedin }) => {
  const FontAwesomeLink = ({ username, icon }) => (
    <Link href={`https://linkedin.com/in/${username}`}>
      <FontAwesomeIcon className="h-6 w-6 text-[#7055FD] cursor-pointer" icon={icon} />
    </Link>
  );

  return (
    <div className={PROFILE_CONTAINER}>
      <img src={`/profiles/${file}`} alt={name} className={`w-28 sm:w-48 rounded-full`}/>
      <h2 className="text-[#7055FD] text-xs sm:text-base font-semibold mt-3">{name}</h2>
      <h2 className="text-[#7055FD] text-xs sm:text-base font-medium mb-2">{position}</h2>
      <FontAwesomeLink username={linkedin} icon={faLinkedin} />
    </div>
  );
};

export default Avatar;
