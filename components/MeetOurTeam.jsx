import TextSection from '/components/TextSection.jsx';
import Heading from '/components/Heading';
import { UnderlineTypes } from '../utils/underlineType';

const MEET_OUR_TEAM = 'flex flex-col bg-[#FFD2DC] pt-20 z-0 w-full';
const CONTENT_CONTAINER = 'flex flex-col pt-14 p-5 md:px-32';
const MEET_OUR_AMAZING_TEAM_TITLE = "flex flex-wrap items-baseline gap-x-2 justify-center w-fit mx-20 sm:mx-20 md:mx-auto lg:mx-auto";



const Button = ({ classes = '', children, targetId }) => {
  return (
    <button
      onClick={() => document.querySelector(`#${targetId}`).scrollIntoView({ behavior: 'smooth'})}
      className={`cursor-pointer rounded-full text-white border-white py-2 px-8 bg-[#FF4D6F] border-4 text-3xl font-bold w-48 ${classes}`}
    >
      {children}
    </button>
  );
};

const MeetOurAmazingTeam = () => {
  return (
    <div>
      <div className={MEET_OUR_TEAM}>
        <div className={MEET_OUR_AMAZING_TEAM_TITLE}>
          <h1 className='text-5xl font-semibold'>Meet our</h1>
          <Heading underlineType={UnderlineTypes.PINK_UNDERLINE}><i>Amazing </i></Heading>
          <h1 className='text-5xl font-semibold ml-2'> Team</h1>
        </div>
        <div className={CONTENT_CONTAINER}>
          <TextSection classes="text-black pb-10 z-20 w-fit justify-center text-center mx-10 sm:mx-20 md:mx-auto lg:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat.
          </TextSection>
          <div className="py-12 flex justify-center gap-6 mx-auto flex-col sm:flex-col md-flex-row lg:flex-row">
            <Button targetId="internal">Internal</Button>
            <Button targetId="technical">Technical</Button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default MeetOurAmazingTeam;
