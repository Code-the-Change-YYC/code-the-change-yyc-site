/* eslint-disable indent */
// please forgive me idk why it made me do this someone with different eslint config can fix this
import Image from 'next/image';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FontAwesomeLink from './FontAwesomeLink';
import { PageIdentifiers } from '../utils/flags';

const PROFILE_CONTAINER = 'flex flex-col items-center m-10';

const Avatar = ({ name, linkedin, position, pfp, classes, prevRole, currRole, profileContainerClasses = '', teamIdentifier }) => {
  // conditional statement for temporary use of local images
  const img = typeof pfp === 'string' ? pfp : 'https:' + pfp.fields.file.url;
  const isPresidentAvatar = String(classes).includes("president-avatar");

  const colorTheme =
    teamIdentifier === PageIdentifiers.INTERNAL_LEVEL_CONTAINER
      ? 'text-[#00D3A9]'
      : teamIdentifier === PageIdentifiers.EXECUTIVE_LEVEL_CONTAINER
      ? 'text-[#7055FD]'
      : '';

  return (
    <div className={`${PROFILE_CONTAINER} ${profileContainerClasses}`}>
      <div className={`size-28 sm:size-44 md:size-48 rounded-full relative overflow-hidden`}>
        <Image src={img} alt={name} layout="fill" objectFit="contain" unoptimized={true} />
      </div>
      <h2 className={`${colorTheme} text-xs sm:text-base font-semibold mt-3 ${classes}`}>{name}</h2>
      <h2 className={`${colorTheme} text-xs sm:text-base font-medium mb-2 ${classes}`}>{position}</h2>
      {isPresidentAvatar && (
        <h2
          className={`text-[#7055FD] w-28 text-center text-xs sm:text-base hidden sm:block font-medium mb-2 ${classes}`}
        >
          {currRole}
        </h2>
      )}
      {(prevRole && !isPresidentAvatar) && (
        <h2
          className={`${colorTheme} w-28 text-center text-xs sm:text-base hidden sm:block font-medium mb-2 ${classes}`}
        >
          Previously: {prevRole}
        </h2>
      )}
      {linkedin && (
        <FontAwesomeLink colorTheme={colorTheme} username={linkedin} icon={faLinkedin} className={`${classes}`} />
      )}
    </div>
  );
};

export default Avatar;
