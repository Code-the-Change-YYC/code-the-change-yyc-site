//const TIMELINE_DATA = [
//  {
//    year: 2019,
//    description: "We opened this year!",
//    image: "",
//  },
//  {
//    year: 2020,
//    description: "Another year happened",
//    image: "",
//  },
//  {
//    year: 2021,
//    description: "Topan joined this year :)",
//    image: "",
//  },
//  {
//    year: 2022,
//    description: "This is the current year",
//    image: "",
//  },
//];
//
const TIMELINE_CONTAINER = "bg-white flex flex-col w-full md:w-1/2";

const Timeline = () => {
  return (
    <>
      <div className={TIMELINE_CONTAINER}>
        <div className="flex flex-row flex-start">
          <div className="flex flex-col w-96 items-center">
            <div className="box-border h-32 w-3/4 bg-[#BAFBE4] mt-10 rounded-lg drop-shadow-md" />
            <div className="flex flex-row ml-auto mt-10">
              <div className="px-5 text-5xl font-semibold">2019</div>
              <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
            </div>
            <div className="w-40 ml-auto">Code the Change YYC began as an organization in 2019. </div>
          </div>
          <div className="border-l-4 border-[#7055FD] h-30" />
          <div className="box-border h-48 w-96 bg-[#A689FF] ml-8 mt-16 rounded-lg drop-shadow-md" />
        </div>
      </div>
      <div className={TIMELINE_CONTAINER}>
        <div className="flex flex-row flex-start">
          <div className="flex flex-col w-96 items-center">
            <div className="box-border h-32 w-3/4 bg-[#A689FF] mt-16 rounded-lg drop-shadow-md" />
          </div>
          <div className="border-l-4 border-[#7055FD] h-30" />
          <div className="flex flex-col w-96 items-center">
            <div className="box-border h-32 w-3/4 bg-[#BAFBE4] mt-10 rounded-lg drop-shadow-md" />
            <div className="flex flex-row mr-auto mt-10">
              <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
              <div className="px-5 text-5xl font-semibold">2020</div>
            </div>
            <div className="w-40 px-10 mr-auto">We did other stuff in 2020. </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
