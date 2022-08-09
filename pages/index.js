/* eslint-disable @next/next/no-img-element */
import Heading from "../components/Heading";
import TextSection from "../components/TextSection";
import Sponsors from "../components/Sponsors";

const HOMEPAGE_BACKGROUND_IMAGE = "/images/homepage/homepage_background.png";
const LOGO_SVG_TOP = "/svgs/homepage/with_logo_top.svg";
const LOGO_SVG_BOTTOM = "/svgs/homepage/with_logo_bottom.svg";
const COMMUNITY_SVG = "/svgs/homepage/coding_community.svg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative flex h-screen justify-center items-center">
        <img
          src={HOMEPAGE_BACKGROUND_IMAGE}
          alt={HOMEPAGE_BACKGROUND_IMAGE}
          className="absolute w-full h-full object-cover"
        />
        <h1 className="text-stroke-outside text-7xl -mt-20 md:m-0 md:text-9xl font-black w-3/4 md:text-center text-[#7055FD] stroke-white drop-shadow-lg">
          Coding a better world together.
        </h1>
      </div>

      <div className="relative flex justify-between bg-[#7055FD] md:bg-white py-52 px-10 md:px-24 lg:px-48 rounded-2xl drop-shadow-lg md:drop-shadow-none">
        <img
          src={LOGO_SVG_TOP}
          alt="logo_svg"
          className="md:hidden absolute top-0 mx-auto left-0 right-0 pt-20 object-fill w-[400px]"
        />
        <img
          src={LOGO_SVG_BOTTOM}
          alt="logo_svg"
          className="md:hidden absolute -bottom-36 mx-auto left-0 right-0 pt-20 object-fill w-[400px]"
        />
        <div className=" flex flex-col md:w-1/3">
          <h2 className="hidden md:block text-5xl text-[#FF4D6F] font-bold">code the change yyc</h2>
          <TextSection classes="md:text-[#A689FF]">
            <strong className="md:hidden text-2xl">code the change yyc</strong> is a student-led initiative where
            students in technology-focused programs volunteer their time to work on projects for causes as a way to grow
            their skills, gain experience, attain mentorship, and give back to the community.
          </TextSection>
        </div>
        {/* TODO: Add image here */}
        <div></div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between py-40 md:px-24 lg:px-48 items-center md:divide-x-4 md:divide-[#A689FF] bg-white md:bg-[#7055FD]">
        <div className="flex flex-col md:w-1/2 md:pr-32 md:mt-0 px-5 md:px-0">
          <Heading classes="md:text-white">Coding</Heading>
          <TextSection classes="md:text-white">
            We seek to partner with causes that have projects on the go that need additional programming and software
            development support. We will work with you to find the right tool for the job. We prefer projects that are
            already underway with a good vision, but require a lot more technical work to move it along.
          </TextSection>
          {/* TODO: Add image here */}
          <div></div>
        </div>

        <img src={COMMUNITY_SVG} alt={COMMUNITY_SVG} className="md:hidden object-fill w-[400px]" />

        <div className="flex flex-col md:w-1/2 md:pl-32 px-5 md:px-0">
          <Heading longUnderline classes="md:text-white">
            Community
          </Heading>
          <TextSection classes="md:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nec vitae ac faucibus. Blandit ultrices magna
            natoque enim quis suscipit. Vitae eget venenatis rhoncus aliquet curabitur mauris, sed turpis nulla. Neque
            molestie mi placerat ultrices sit in sit pretium ut.
          </TextSection>
          {/* TODO: Add image here */}
          <div></div>
        </div>
      </div>

      <Sponsors />
    </div>
  );
}
