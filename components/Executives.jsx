import Heading from "./Heading";
import Avatar from "./Avatar";

const EXECUTIVES_CONTAINER = "bg-white flex flex-col items-center mb";
const EXECUTIVE_LEVEL_CONTAINER = "flex flex-row flex-wrap justify-center w-full sm:w-8/12 mb-5";

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
