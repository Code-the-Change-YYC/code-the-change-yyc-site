import Heading from './Heading';
import Image from 'next/image';
import { UnderlineTypes } from '../utils/underlineType';
import { HACKATHONS } from '../data/hackathons';

const HACKATHON_TIMELINE_CONTAINER = 'bg-white';
const HACKATHON_TIMELINE_HEADER = 'text-center';
const HACKATHON_TIMELINE_CONTENT = 'flex-col text-center text-xl px-[50px] font-bold mb-[70px] md:flex-row';
const HACKATHON_TITLE_YEAR = 'text-5xl pb-[15px] italic';
const HACKATHON_IMAGE = 'border-[8px] border-[#00D3A9] object-cover rounded-xl max-w-[400px]';

const HackathonSection = ({ hackathon }) => {
  return (
    <div className={HACKATHON_TIMELINE_CONTENT}>
      <div>
        <h1 className={HACKATHON_TITLE_YEAR}>
          {hackathon.year}
        </h1>
        <Image className={HACKATHON_IMAGE} src={hackathon.img} alt={hackathon.title} />
      </div>
      <div>
        <p className='text-left my-[15px] text-[#FF6B54]'>
          Topics:  {hackathon.topic}
        </p>
        <p className='font-medium text-[#00D3A9]'>{hackathon.blurb}</p>
      </div>
    </div>
  );
};

const HackathonTimeline = () => {
  return (
    <div className={HACKATHON_TIMELINE_CONTAINER}>
      <div>
        <div className={HACKATHON_TIMELINE_HEADER}>
          <Heading classes='text-black' underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Hack the Change</Heading>
        </div>
        {HACKATHONS.map((hackathon, index) => (
          <HackathonSection hackathon={hackathon} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default HackathonTimeline;
