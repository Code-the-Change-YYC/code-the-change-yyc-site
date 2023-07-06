import Image from 'next/image';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FontAwesomeLink from './FontAwesomeLink';

const PROFILE_CONTAINER = 'flex flex-col items-center m-10';

const Avatar = ({ name, linkedin, position, pfp, classes, prevRole }) => {
  const img = 'https:' + pfp.fields.file.url;
  return (
    <div className={PROFILE_CONTAINER}>
      <div className="w-28 h-28 sm:w-48 sm:h-48 rounded-full relative overflow-hidden">
        <Image src={img} alt={name} layout="fill" objectFit="contain" unoptimized={true} />
      </div>
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
