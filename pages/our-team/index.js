import TextSection from '/components/TextSection.jsx';
import Heading from '/components/Heading';
import { UnderlineTypes } from '../../utils/underlineType';
import Image from 'next/image';

const MEET_OUR_TEAM = 'flex flex-col bg-[#FFD2DC] pt-20 z-0';
const INTERNAL_TEAM = 'flex flex-col h-[50rem] pt-20 z-0';
const TECHNICAL_TEAM = 'flex flex-col bg-[#BAFBE4] h-[50rem] pt-20 z-0';
const CONTENT_CONTAINER = 'flex flex-col pt-14 p-5 md:px-32';
const GREEN_SIDE_LINES_DIR = '/svgs/our-team/green_lines.svg';
const INTERNAL_TITLE = "flex items-baseline space-x-4 mb-4 py-5 justify-center";
const TECHNICAL_TITLE = "flex items-baseline space-x-4 mb-4 py-5 justify-center";


const Button = ({ classes = '', children, targetId }) => {
  return (
    <button
      onClick={() => document.querySelector(`#${targetId}`).scrollIntoView({ behavior: 'smooth'})}
      className={`cursor-pointer rounded-full text-white border-white py-2 px-8 bg-[#FF4D6F] border-4 text-3xl font-bold ${classes}`}
    >
      {children}
    </button>
  );
};

const OurTeam = () => {
  return (
    <div>
      <div className={MEET_OUR_TEAM}>
        <Heading classes="py-0" underlineType={UnderlineTypes.PINK_UNDERLINE}>Meet Our <i>Amazing </i>Team</Heading>
        <div className={CONTENT_CONTAINER}>
          <TextSection classes="text-black pb-10 z-20 px-[25rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat.
          </TextSection>
          <div className="py-12 flex justify-center gap-6">
            <Button targetId="internal">Internal</Button>
            <Button targetId="technical">Technical</Button>
          </div>
        </div>
      </div>
      <div id="internal" className={INTERNAL_TEAM}>
        <div className={INTERNAL_TITLE}>
          <Image src={GREEN_SIDE_LINES_DIR} alt="" width="30" height="25" className="pb-4" />
          <Heading underlineType={UnderlineTypes.GREEN_SHORT_UNDERLINE}>Internal</Heading>
          <h1 className='text-5xl font-semibold'>Team</h1>
        </div>
      </div>
      <div id="technical" className={TECHNICAL_TEAM}>
        <div className={TECHNICAL_TITLE}>
          <Heading underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Technical</Heading>
          <h1 className='text-5xl font-semibold'>Teams</h1>
        </div>
      </div>
    </div>
    
  );
};

export default OurTeam;
