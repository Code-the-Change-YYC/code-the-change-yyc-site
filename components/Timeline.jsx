/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { TIMELINE_DATA } from "../data/timeline";
import { UnderlineTypes } from "../utils/underlineType";
import Heading from "./Heading";

const TIMELINE_CONTAINER = "bg-white flex flex-col lg:h-0 lg:h-screen";
const PURPLE_SIDE_LINES_DIR = "/svgs/timeline/left_side_lines.svg";

const Timeline = () => {
  const isEven = (index) => {
    return index % 2 == 0;
  };

  const MiddleLine = <div className="border-l-4 border-[#7055FD]" />;

  const TimelineHeading = (
    <div className="flex flex-row justify-center py-10">
      <img src={PURPLE_SIDE_LINES_DIR} alt="" className="pb-6" />
      <Heading underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Timeline</Heading>
    </div>
  );

  const EvenTimelineBlock = ({ year, description, smallImage, largeImage }) => (
    <div className="flex flex-row flex-start">
      <div className="flex flex-col">
        <div className="w-[29vw] mx-[10vw] lg:w-[14.5vw] lg:mx-[5vw] mt-10 drop-shadow-md">
          <Image src={smallImage} alt="" placeholder="blur" style={{ borderRadius: "0.5rem" }} />
        </div>
        <div className="flex flex-row ml-auto mt-10">
          <div className="px-3 text-5xl font-semibold">{year}</div>
          <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
        </div>
        <div className="w-40 ml-auto">{description}</div>
      </div>
      {MiddleLine}
      <div className="w-[43vw] ml-[7vw] lg:w-[21.5vw] lg:ml-[3.5vw] my-16 drop-shadow-md">
        <Image
          src={largeImage}
          alt=""
          placeholder="blur"
          style={{
            borderTopLeftRadius: "0.5rem",
            borderBottomLeftRadius: "0.5rem",
          }}
        />
      </div>
    </div>
  );

  const OddTimelineBlock = ({ year, description, smallImage, largeImage }) => (
    <div className="flex flex-row flex-start">
      <div className="w-[42vw] mr-[7vw] lg:w-[21vw] lg:mr-[3.5vw] my-16 drop-shadow-md">
        <Image
          src={smallImage}
          alt=""
          placeholder="blur"
          style={{ borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem" }}
        />
      </div>
      {MiddleLine}
      <div className="flex flex-col">
        <div className="w-[30vw] mx-[10vw] lg:w-[15vw] lg:mx-[5vw] mt-10 drop-shadow-md">
          <Image src={largeImage} alt="" placeholder="blur" style={{ borderRadius: "0.5rem" }} />
        </div>
        <div className="flex flex-row mr-auto mt-10">
          <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
          <div className="pl-3 text-5xl font-semibold">{year}</div>
        </div>
        <div className="w-40 px-10 mr-auto">{description}</div>
      </div>
    </div>
  );

  const renderTimeline = TIMELINE_DATA.map((props, index) => {
    return isEven(index) ? EvenTimelineBlock(props) : OddTimelineBlock(props);
  });

  return (
    <div className={TIMELINE_CONTAINER}>
      {TimelineHeading}
      {renderTimeline}
    </div>
  );
};

export default Timeline;
