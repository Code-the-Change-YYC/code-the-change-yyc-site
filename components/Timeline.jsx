/* eslint-disable @next/next/no-img-element */
import { TIMELINE_DATA } from "../data/timeline";

const TIMELINE_CONTAINER = "bg-white flex flex-col sm:h-0 sm:min-height-full";

const Timeline = () => {
  const middleLine = <div className="border-l-4 border-[#7055FD] h-30" />;

  const renderTimeline = TIMELINE_DATA.map(({ year, description, smallImage, largeImage }, index) => {
    if (index % 2 == 0) {
      return (
        <div className="flex flex-row flex-start">
          <div className="flex flex-col items-center">
            <img
              src={`/images/timeline/${smallImage}`}
              alt=""
              className="box-border h-32 w-36 sm:h-52 sm:w-80 bg-[#BAFBE4] ml-4 mr-8 mt-10 rounded-lg drop-shadow-md"
            />
            <div className="flex flex-row ml-auto mt-10">
              <div className="px-3 text-5xl font-semibold">{year}</div>
              <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
            </div>
            <div className="w-40 ml-auto">{description}</div>
          </div>
          {middleLine}
          <img
            src={`/images/timeline/${largeImage}`}
            alt=""
            className="box-border h-32 w-40 sm:h-52 sm:w-80 bg-[#A689FF] ml-auto sm:ml-12 mt-16 rounded-l-lg drop-shadow-md"
          />
        </div>
      );
    } else {
      return (
        <div className="flex flex-row flex-start">
          <img
            src={`/images/timeline/${smallImage}`}
            alt=""
            className="box-border h-32 w-40 sm:h-52 sm:w-80 bg-[#A689FF] mr-8 md:mr-12 mt-16 rounded-r-lg drop-shadow-md"
          />
          {middleLine}
          <div className="flex flex-col items-center">
            <img
              src={`/images/timeline/${largeImage}`}
              alt=""
              className="box-border h-32 w-36 sm:h-52 sm:w-80 bg-[#BAFBE4] mx-8 mt-10 rounded-lg drop-shadow-md"
            />
            <div className="flex flex-row mr-auto mt-10">
              <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
              <div className="pl-3 text-5xl font-semibold">{year}</div>
            </div>
            <div className="w-48 px-10 mr-auto">{description}</div>
          </div>
        </div>
      );
    }
  });

  return <div className={TIMELINE_CONTAINER}>{renderTimeline}</div>;
};

export default Timeline;
