/* eslint-disable @next/next/no-img-element */
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeLink from "./FontAwesomeLink";

const PROFILE_CONTAINER = "flex flex-col items-center m-10 basis-1/6 grow";

const Avatar = ({ name, file, position, linkedin, prevRole, classes }) => {
  return (
    <div className={PROFILE_CONTAINER}>
      <img src={`/profiles/${file}`} alt={name} className={`w-28 sm:w-48 rounded-full`} />
      <h2 className={`text-[#7055FD] text-xs sm:text-base font-semibold mt-3 ${classes}`}>{name}</h2>
      <h2 className={`text-[#7055FD] text-xs sm:text-base font-medium mb-2 ${classes}`}>{position}</h2>
      {prevRole && (
        <h2 className={`text-[#7055FD] text-xs sm:text-base font-medium mb-2 ${classes}`}>Previously: {prevRole}</h2>
      )}
      {linkedin && <FontAwesomeLink username={linkedin} icon={faLinkedin} />}
    </div>
  );
};

export default Avatar;
