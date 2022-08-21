import Heading from "./Heading";
import AlumniCarousel from "./AlumniCarousel";

const ALUMNI_CONTAINER = "relative flex flex-col items-center h-[1000px] bg-[#FF6B54] pt-3 mb-10 shadow-xl z-0";
const ALUMNI_HEADER = "pb-10 w-[80%] flex items-left";
const SPARKLE_IMG = "ml-5 mb-5";

const AlumniHighlights = () => {
  return (
    <>
      <div className={ALUMNI_CONTAINER}>
        <div className={ALUMNI_HEADER}>
          <Heading classes="text-white mr-24" underlineType={"WHITE_LONG_UNDERLINE"}>
            <span className="flex flex-row mb-5">
              Alumni Highlights
              <img className={SPARKLE_IMG} src="/svgs/white_sparkle.svg" />
            </span>
          </Heading>
        </div>
        <AlumniCarousel />
      </div>
    </>
  );
};

export default AlumniHighlights;
