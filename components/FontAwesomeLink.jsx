import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontAwesomeLink = ({ username, icon, className }) => {
  const defaultClasses = 'h-6 w-6 text-[#7055FD] hover:text-[#8A76FF] transition-all duration-300 cursor-pointer';
  return (
    <a target="_blank" href={`https://linkedin.com/in/${username}`} rel="noopener noreferrer">
      <FontAwesomeIcon className={`${defaultClasses} ${className}`} icon={icon} />
    </a>
  );
};

export default FontAwesomeLink;
