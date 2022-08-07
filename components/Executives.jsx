import Image from "next/image";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const EXECUTIVES_CONTAINER = "bg-white flex flex-col items-center";
const EXECUTIVE_LEVEL_CONTAINER = "flex flex-row justify-center mt-10";
const PROFILE_CONTAINER = "flex flex-col items-center mx-10";
const PROFILE_SIZE = 200;

const Executives = () => {
  const executivesFirstRow = [
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
    {
      name: "Sophia Lu",
      file: "Sophia Lu.jpg",
      position: "VP Marketing",
      linkedin: "sophialu1",
    },
  ];

  const executivesSecondRow = [
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
    <a href={link}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );

  const ProfileElement = ({ name, file, position, linkedin }) => (
    <div className={PROFILE_CONTAINER}>
      <Image className="rounded-full" src={`/profiles/${file}`} alt={name} height={PROFILE_SIZE} width={PROFILE_SIZE} />
      <h2>{name}</h2>
      <h2>{position}</h2>
      <FontAwesomeIcon link={linkedin} icon={faLinkedin} />
    </div>
  );

  return (
    <div className={EXECUTIVES_CONTAINER}>
      <Heading longUnderline={true}>Executives</Heading>
      <div className={EXECUTIVE_LEVEL_CONTAINER}>
        {executivesFirstRow.map((props) => (
          <ProfileElement key={props.name} {...props} />
        ))}
      </div>
      <div className={EXECUTIVE_LEVEL_CONTAINER}>
        {executivesSecondRow.map((props) => (
          <ProfileElement key={props.name} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Executives;
