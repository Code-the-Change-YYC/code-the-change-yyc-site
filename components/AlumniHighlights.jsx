import Heading from "./Heading";
import AlumniCard from "./AlumniCard";

const ALUMNI_CONTAINER = "h-[800px] w-screen bg-[#FF6B54] pt-12 mb-10 shadow-xl"; 
const ALUMNI_HEADER = "w-full";
const SPARKLE_IMG = "absolute top-[1360px] right-[70px]";

const AlumniHighlights = () => {
  return (
    <>
      <div className={ALUMNI_CONTAINER}>
        <div className={ALUMNI_HEADER}>
          <Heading classes="text-white mr-24 pb-10" underlineType="WHITE_LONG_UNDERLINE">
            Alumni <br/>Highlights
          </Heading>
					<img className={SPARKLE_IMG} src="/svgs/white_sparkle.svg" />
        </div>
        {/* <AlumniCard /> */}
      </div>
    </>
  );
};

export default AlumniHighlights;
