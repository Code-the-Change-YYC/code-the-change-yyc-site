import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontAwesomeLink = ({ username, icon, classes = "h-6 w-6 text-[#7055FD] cursor-pointer" }) => (
  <a target="_blank" href={`https://linkedin.com/in/${username}`} rel="noopener noreferrer">
    <FontAwesomeIcon className={classes} icon={icon} />
  </a>
);

export default FontAwesomeLink;
