import Image from "next/image";
import { JOIN_ONE, JOIN_TWO } from "../../data/join";
const JOIN_US_CONTAINER = "bg-[#7055FD] py-14 p-32 flex flex-col";
const HEADING_CONTAINER = "flex flex-row";
const PHOTO_ROW = "flex flex-row justify-between";

const HEART_SYMBOL_SVG = "/svgs/join/heart_symbol.svg";

const JoinUs = () => {
  const TeamPhoto = ({ photo, classes }) => (
    <div className={`relative w-72 h-72 rounded-3xl overflow-hidden border-2 border-white ${classes}`}>
      <Image src={photo} alt="Team event photo" layout="fill" objectFit="cover" placeholder="blur" />
    </div>
  );

  return (
    <div className={JOIN_US_CONTAINER}>
      <div className={HEADING_CONTAINER}>
        <h1 className={`text-5xl font-semibold text-white`}>Join Us!</h1>
        <div className="-mt-2">
          <Image src={HEART_SYMBOL_SVG} alt="" height="70%" width="70%" />
        </div>
      </div>
      <div className={PHOTO_ROW}>
        {JOIN_ONE.map(({ key, photo, classes }) => (
          <TeamPhoto key={key} photo={photo} classes={classes} />
        ))}
      </div>
      <div className={PHOTO_ROW}>
        {JOIN_TWO.map(({ key, ...props }) => (
          <TeamPhoto key={key} {...props} />
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
