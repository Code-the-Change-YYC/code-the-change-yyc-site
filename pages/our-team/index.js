import Heading from '/components/Heading';
import { UnderlineTypes } from '../../utils/underlineType';
import MeetOurTeam from '../../components/MeetOurTeam';
import Internal from '../../components/Internal';


const TECHNICAL_TEAM = 'flex flex-col bg-[#BAFBE4] h-[50rem] pt-20 z-0';
const TECHNICAL_TITLE = "flex items-baseline space-x-4 mb-4 py-5 justify-center";

const OurTeam = () => {
  return (
    <div>
      <MeetOurTeam />
      <Internal />
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
