import Link from "next/link";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const EXECUTIVES_CONTAINER = "bg-white flex flex-col items-center mb";
const EXECUTIVE_LEVEL_CONTAINER = "flex flex-row flex-wrap justify-center w-full sm:w-8/12 mb-5";
const PROFILE_CONTAINER = "flex flex-col items-center m-10";

const Executives = () => {
  const executives = [
    {
      name: "Harsohail Brar",
      file: "Harsohail Brar.jpg",
      position: "Co-President",
      linkedin: "harsohailbrar",
    },
    {
      name: "Topan Budiman",
      file: "Topan Budiman.png",
      position: "Co-President",
      linkedin: "topanbudiman",
    },
    {
      name: "Natalia Ionescu",
      file: "Natalia Ionescu.jpg",
      position: "VP Graphic Design",
      linkedin: "natalia-ionescu",
    },
    { name: "Sophia Lu",
      file: "Sophia Lu.jpg",
      position: "VP Marketing",
      linkedin: "sophialu1",
    },
    {
      name: "Hossein Alamatsaz",
      file: "Hossein Alamatsaz.jpg",
      position: "VP Finance",
      linkedin: "hosseinalamatsaz",
    },
    {
      name: "Ajay Arumugam",
      file: "Ajay Arumugam.jpg",
      position: "VP Tech",
      linkedin: "ajay-arumugam-209a25198",
    },
    {
      name: "Tyler Lam",
      file: "Tyler Lam.jpg",
      position: "VP Events",
      linkedin: "tylerwlam",
    },
  ];

  const FontAwesomeLink = ({ username, icon }) => (
    <Link href={`https://linkedin.com/in/${username}`}>
      <FontAwesomeIcon className="h-6 w-6 text-[#7055FD] cursor-pointer" icon={icon} />
    </Link>
  );

  const Avatar = ({ name, file, position, linkedin }) => (
    <div className={PROFILE_CONTAINER}>
      <img src={`/profiles/${file}`} alt={name} className={`w-28 sm:w-48 rounded-full`}/>
      <h2 className="text-[#7055FD] text-xs sm:text-base font-semibold mt-3">{name}</h2>
      <h2 className="text-[#7055FD] text-xs sm:text-base font-medium mb-2">{position}</h2>
      <FontAwesomeLink username={linkedin} icon={faLinkedin} />
    </div>
  );

  return (
    <div className={EXECUTIVES_CONTAINER}>
      <Heading longUnderline={true}>Executives</Heading>
      <div className={EXECUTIVE_LEVEL_CONTAINER}>
        {executives.map((props) => (
          <Avatar key={props.name} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Executives;
