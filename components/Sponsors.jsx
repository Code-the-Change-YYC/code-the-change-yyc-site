import Image from "next/image";
import Heading from "./Heading";

const SPONSORS_CONTAINER = "bg-white flex flex-col items-center";
const HEADING_CONTAINER = "flex flex-row justify-center mb-10";
const SPONSORS_LEVEL_CONTAINER = "flex flex-row justify-center items-center my-5";
const CONTENT_CONTAINER = "my-10 font-medium max-w-md text-center";
const UNDERLINE_CONTAINER = "mb-10";
const UNDERLINE_PROPERTIES = {
  width: 177,
  height: 10,
};

const Sponsors = () => {
  // Multiplier is the value you need to multiply height by to get width
  const goldSponsorsLevelOne = [
    { file: "Benevity.png", multiplier: 3.216, height: 90 },
    { file: "Hunter Hub.png", multiplier: 7.02, height: 70 },
  ];

  const goldSponsorsLevelTwo = [
    { file: "Arcurve.png", multiplier: 10, height: 50 },
    { file: "Cisco Secure.jpg", multiplier: 3.41, height: 120 },
  ];

  const silverSponsors = [
    { file: "Schulich School of Engineering.png", multiplier: 1.45, height: 115 },
    { file: "AltaML.png", multiplier: 2.86, height: 100 },
  ];

  const bronzeSponsors = [
    { file: "Helcim.svg", multiplier: 1, height: 75 },
    { file: "Village Ice Cream.png", multiplier: 1, height: 75 },
  ];

  const SponsorImage = ({ key, file, multiplier, height }) => (
    <div key={key} className="mx-5">
      <Image src={`/sponsor_logos/${file}`} alt={file} width={height * multiplier} height={height} />
    </div>
  );

  return (
    <div className={SPONSORS_CONTAINER}>
      <div className={HEADING_CONTAINER}>
        <Heading>Sponsors</Heading>
        <Image src="/svgs/Sponsorship Heart.svg" alt="" height="100%" width="100%" />
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {goldSponsorsLevelOne.map(({ file, ...props }) => (
          <SponsorImage key={file} file={file} {...props} />
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {goldSponsorsLevelTwo.map(({ file, ...props }) => (
          <SponsorImage key={file} file={file} {...props} />
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {silverSponsors.map(({ file, ...props }) => (
          <SponsorImage key={file} file={file} {...props} />
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {bronzeSponsors.map(({ file, ...props }) => (
          <SponsorImage key={file} file={file} {...props} />
        ))}
      </div>
      <div className={CONTENT_CONTAINER}>
        We are continuously pursuing endeavors that could help students achieve more social good for the community.
        These are the sponsors that help make our events and ideas possible.
      </div>
      <div className={UNDERLINE_CONTAINER}>
        <Image
          src="/svgs/Purple Underline.svg"
          alt=""
          width={UNDERLINE_PROPERTIES.width}
          height={UNDERLINE_PROPERTIES.height}
        />
      </div>
    </div>
  );
};

export default Sponsors;
