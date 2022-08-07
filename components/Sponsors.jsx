import Image from "next/image";
import Heading from "./Heading";

const SPONSORS_CONTAINER = "bg-white flex flex-col items-center";
const HEADING_CONTAINER = "flex flex-row justify-center";
const SPONSORS_LEVEL_CONTAINER = "flex flex-row justify-center items-center my-5";
const CONTENT_CONTAINER = "my-10 font-medium max-w-sm text-center";
const UNDERLINE_CONTAINER = "mb-10";

const Sponsors = () => {
  const goldSponsors = [
    { file: "Benevity.png", width: 235, height: 70 },
    { file: "Arcurve.png", width: 350, height: 35 },
    { file: "Cisco Secure.jpg", width: 255, height: 75 },
    { file: "Hunter Hub.png", width: 350, height: 50 },
  ];

  const silverSponsors = [
    { file: "Schulich School of Engineering.png", width: 116, height: 80 },
    { file: "AltaML.png", width: 185, height: 65 },
  ];

  const bronzeSponsors = [
    { file: "Helcim.svg", width: 75, height: 75 },
    { file: "Village Ice Cream.png", width: 75, height: 75 },
  ];

  return (
    <div className={SPONSORS_CONTAINER}>
      <div className={HEADING_CONTAINER}>
        <Heading>Sponsors</Heading>
        <Image src="/svgs/Sponsorship Heart.svg" alt="" height="100%" width="100%" />
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {goldSponsors.map(({ file, width, height }) => (
          <div key={file} className="mx-5">
            <Image src={`/sponsor_logos/${file}`} alt={file} width={width} height={height} />
          </div>
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {silverSponsors.map(({ file, width, height }) => (
          <div key={file} className="mx-5">
            <Image key={file} src={`/sponsor_logos/${file}`} alt={file} width={width} height={height} />
          </div>
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {bronzeSponsors.map(({ file, width, height }) => (
          <div key={file} className="mx-5">
            <Image key={file} src={`/sponsor_logos/${file}`} alt={file} width={width} height={height} />
          </div>
        ))}
      </div>
      <div className={CONTENT_CONTAINER}>
        We are continuously pursuing endeavors that could help students achieve more social good for the community.
        These are the sponsors that help make our events and ideas possible.
      </div>
      <div className={UNDERLINE_CONTAINER}>
        <Image src="/svgs/Purple Underline.svg" alt="" width={177} height={10} />
      </div>
    </div>
  );
};

export default Sponsors;
