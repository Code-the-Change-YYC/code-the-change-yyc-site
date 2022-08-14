import Heading from "./Heading";
import AlumniCard from "./AlumniCard";

const ALUMNI_CONTAINER = "h-[800px] w-screen bg-[#FF6B54] flex flex-col items-left px-48 pt-12"; 
const ALUMNI_HEADER = "flex flex-row";
const SPARKLE_IMG = "mb-10 ml-5 w-12";

const AlumniHighlights = () => {
  return (
    <>
      <div className={ALUMNI_CONTAINER}>
        <div className={ALUMNI_HEADER}>
          <Heading classes="text-white " longUnderline>
            Alumni Highlights
          </Heading>
          <img className={SPARKLE_IMG} src="/svgs/white_sparkle.svg" />
        </div>
        <AlumniCard name="Tyler Lam" />
      </div>
    </>
  );
};

export default AlumniHighlights;
