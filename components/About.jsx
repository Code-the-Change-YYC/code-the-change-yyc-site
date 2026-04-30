import Image from "next/image";
import Heading from "./Heading";
import TextSection from "./TextSection";
import winsVolunteeringJpeg from "../public/images/about/wins_2022_volunteering.jpeg";

const WAVING_HAND_SVG = "/svgs/about/waving_hand.svg";
const WHITE_FLOWER_SVG = "/svgs/about/white_flower.svg";
const BLUE_BOLD_TEXT = "text-2xl text-[#BAFBE4]";

const SVG_SIZE = 100;

const About = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 grow">
      <Image src={winsVolunteeringJpeg} alt="Volunteering at WINS" placeholder="blur" />
      <div className="flex flex-col bg-[#7055FD] items-center">
        <div className="flex flex-row">
          <Heading longUnderline={true} classes="pt-10 text-white" width="w-full">
            Hello!
          </Heading>
          <Image src={WAVING_HAND_SVG} alt="" width={SVG_SIZE} height={SVG_SIZE} />
        </div>

        <TextSection classes="text-white w-2/3 sm:w-1/2 pt-10 pb-10 lg:pb-44">
          <strong className={BLUE_BOLD_TEXT}>code the change yyc</strong> is a student-led initiative where students in
          technology-focused programs volunteer their time to work on projects for causes as a way to grow their
          <strong className={BLUE_BOLD_TEXT}> skills</strong>, gain
          <strong className={BLUE_BOLD_TEXT}> experience</strong>, attain mentorship, and
          <strong className={BLUE_BOLD_TEXT}> give back</strong> to the community.
        </TextSection>
        <div className="md:hidden pb-10">
          <Image src={WHITE_FLOWER_SVG} alt="" width={SVG_SIZE} height={SVG_SIZE} />
        </div>
      </div>
    </div>
  );
};

export default About;
