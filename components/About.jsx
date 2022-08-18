/* eslint-disable @next/next/no-img-element */
import Heading from "./Heading";
import TextSection from "./TextSection";

const WINS_VOLUNTEERING_PNG = "/images/about/wins_2022_volunteering.png";
const WAVING_HAND_SVG = "/svgs/about/waving_hand.svg";
const BLUE_BOLD_TEXT = "text-2xl text-[#BAFBE4]";

const About = () => {
  return (
    <div className="flex flex-col w-full sm:w-1/3 grow">
      <img src={WINS_VOLUNTEERING_PNG} alt="Volunteering at WINS" />
      <div className="flex flex-col bg-[#7055FD] items-center">
        <div className="flex flex-row">
          <Heading longUnderline={true} classes="pt-10 text-white">
            Hello!
          </Heading>
          <img src={WAVING_HAND_SVG} alt="" />
        </div>
        <TextSection classes="text-white p-14">
          <strong className={BLUE_BOLD_TEXT}>code the change yyc</strong> is a student-led initiative where students in
          technology-focused programs volunteer their time to work on projects for causes as a way to grow their
          <strong className={BLUE_BOLD_TEXT}> skills</strong>, gain
          <strong className={BLUE_BOLD_TEXT}> experience</strong>, attain mentorship, and
          <strong className={BLUE_BOLD_TEXT}> give back</strong> to the community.
        </TextSection>
      </div>
    </div>
  );
};

export default About;
