import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontAwesomeLink = ({ username, colorTheme, icon, className }) => {
  const defaultClasses = 'size-6 transition-all duration-300 cursor-pointer';
  return (
    <a target="_blank" href={`https://linkedin.com/in/${username}`} rel="noopener noreferrer">
      <FontAwesomeIcon className={`${colorTheme} hover:size-7 ${defaultClasses} ${className}`} icon={icon} />
    </a>
  );
};

export default FontAwesomeLink;
