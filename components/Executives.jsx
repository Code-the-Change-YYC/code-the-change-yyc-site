import Image from "next/image";
import Heading from "./Heading";

const EXECUTIVES_CONTAINER = "bg-white flex flex-col items-center";
const EXECUTIVE_LEVEL_CONTAINER = "flex flex-row justify-center m-10";
const PROFILE_CONTAINER = "flex flex-col items-center m-10";
const PROFILE_SIZE = 200;

const Executives = () => {
  const executivesFirstRow = [
    {
      name: "Harsohail Brar",
      file: "Harsohail Brar.jpg",
      linkedin: "harsohailbrar",
    },
    {
      name: "Topan Budiman",
      file: "Topan Budiman.png",
      linkedin: "topanbudiman",
    },
  ];

  return (
    <div className={EXECUTIVES_CONTAINER}>
      <Heading longUnderline={true}>Executives</Heading>
      <div className={EXECUTIVE_LEVEL_CONTAINER}>
        {executivesFirstRow.map(({ name, file, linkedin }) => (
          <div key={name} className={PROFILE_CONTAINER}>
            <Image
              className="rounded-full"
              src={`/profiles/${file}`}
              alt={name}
              height={PROFILE_SIZE}
              width={PROFILE_SIZE}
            />
            <h2>{name}</h2>
            <h2>{linkedin}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executives;
