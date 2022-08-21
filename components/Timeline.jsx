/* eslint-disable @next/next/no-img-element */
import { TIMELINE_DATA } from "../data/timeline";
import { UnderlineTypes } from "../utils/underlineType";
import Heading from "./Heading";

const TIMELINE_CONTAINER = "bg-white flex flex-col lg:h-0 lg:min-height-full";
const PURPLE_SIDE_LINES_DIR = "/svgs/timeline/left_side_lines.svg";

const Timeline = () => {
  const isEven = (index) => {
    return index % 2 == 0;
  };

  const MiddleLine = <div className="border-l-4 border-[#7055FD] h-30" />;

  const TimelineHeading = (
    <div className="flex flex-row justify-center py-10">
      <img src={PURPLE_SIDE_LINES_DIR} alt="" className="pb-6" />
      <Heading underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Timeline</Heading>
    </div>
  );

  const LeftTimelineSide = ({ year, description, smallImage, largeImage }) => (
    <div className="flex flex-row flex-start">
      <div className="flex flex-col items-center">
        <img
          src={`/images/timeline/${smallImage}`}
          alt=""
          className="box-border h-32 w-36 xsm:h-40 xsm:w-60 sm:h-52 sm:w-80 md:h-64 md:w-88 lg:h-52 lg:w-80 md:bg-[#BAFBE4] ml-4 mr-8 mt-10 rounded-lg drop-shadow-md"
        />
        <div className="flex flex-row ml-auto mt-10">
          <div className="px-3 text-5xl font-semibold">{year}</div>
          <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
        </div>
        <div className="w-40 ml-auto">{description}</div>
      </div>
      {MiddleLine}
      <img
        src={`/images/timeline/${largeImage}`}
        alt=""
        className="box-border h-32 w-40 xsm:h-40 xsm:w-64 sm:h-52 sm:w-80 md:h-64 md:w-88 lg:h-52 lg:w-80 bg-[#A689FF] ml-auto lg:ml-12 mt-16 rounded-l-lg drop-shadow-md"
      />
    </div>
  );

  const RightTimelineSide = ({ year, description, smallImage, largeImage }) => (
    <div className="flex flex-row flex-start">
      <img
        src={`/images/timeline/${smallImage}`}
        alt=""
        className="box-border h-32 w-40 xsm:h-40 xsm:w-64 sm:h-52 sm:w-80 md:h-64 md:w-88 lg:h-52 lg:w-80 bg-[#A689FF] mr-8 md:mr-12 mt-16 rounded-r-lg drop-shadow-md"
      />
      {MiddleLine}
      <div className="flex flex-col items-center">
        <img
          src={`/images/timeline/${largeImage}`}
          alt=""
          className="box-border h-32 w-36 xsm:h-40 xsm:w-60 sm:h-52 sm:w-80 md:h-64 md:w-88 lg:h-52 lg:w-80 bg-[#BAFBE4] mx-8 mt-10 rounded-lg drop-shadow-md"
        />
        <div className="flex flex-row mr-auto mt-10">
          <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
          <div className="pl-3 text-5xl font-semibold">{year}</div>
        </div>
        <div className="w-48 px-10 mr-auto">{description}</div>
      </div>
    </div>
  );

  const renderTimeline = TIMELINE_DATA.map((props, index) => {
    return isEven(index) ? LeftTimelineSide(props) : RightTimelineSide(props);
  });

  return (
    <div className={TIMELINE_CONTAINER}>
      {TimelineHeading}
      {renderTimeline}
    </div>
  );
};

export default Timeline;
