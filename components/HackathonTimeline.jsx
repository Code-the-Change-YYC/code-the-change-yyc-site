import Heading from './Heading';
import Image from 'next/image';
import { UnderlineTypes } from '../utils/underlineType';
import { HACKATHONS } from '../data/hackathons';

const HACKATHON_TIMELINE_CONTAINER = 'flex justify-center bg-white';
const HACKATHON_TIMELINE_CONTENT = 'w-[500px] md:w-[1100px]';
const HACKATHON_TIMELINE_HEADER = 'flex justify-center my-[30px] md:justify-start md:mx-[50px] md:my-[60px]';
const HACKATHON_EVENT_INFO = 'flex text-center text-xl px-[50px] font-bold mb-[70px] md:items-center flex-col';
const HACKATHON_TITLE_YEAR = 'text-5xl pb-[15px] italic md:text-4xl';
const HACKATHON_IMAGE = 'object-cover md:rounded-xl max-w-[400px] md:w-[450px] md:h-[250px] md:shadow-[15px_15px_0px_0px_#00D3A9]';
const HACKATHON_TEXT = 'flex-col md:w-[400px] md:mx-[40px] leading-[1] text-[20px]';
const HACKATHON_TOPIC_TEXT = 'flex text-left my-[15px] text-[#FF4D6F] md:text-[#FF6B54] md:my-1 md:font-extrabold md:text-[25px]';

const HackathonSection = ({ hackathon, index }) => {
  let sectionInfoStyling = '';
  let sectionTextStyling = '';
  let sectionTopicStyling = '';

  if(index % 2 == 0) {
    sectionInfoStyling += 'md:flex-row md:justify-start';
    sectionTextStyling += 'md:text-left';
  } else {
    sectionInfoStyling += 'md:flex-row-reverse';
    sectionTextStyling += 'md:text-right';
    sectionTopicStyling += 'md:text-right';
  }

  return (
    <div className={`${HACKATHON_EVENT_INFO} ${sectionInfoStyling}`}>
      <div>
        <h1 className={HACKATHON_TITLE_YEAR}>
          {hackathon.year}
        </h1>
        <Image className={HACKATHON_IMAGE} src={hackathon.img} alt={hackathon.title} />
      </div>
      <div className={`${HACKATHON_TEXT} ${sectionTextStyling}`}>
        <div className={`${HACKATHON_TOPIC_TEXT} ${sectionTopicStyling}`}>
          <p className='md:hidden pr-[5px]'>Topics:</p>
          <p>{hackathon.topic}</p>
        </div>
        <p className='font-medium md:text-[#00D3A9]'>{hackathon.blurb}</p>
      </div>
    </div>
  );
};

const HackathonTimeline = () => {
  return (
    <div className={HACKATHON_TIMELINE_CONTAINER}>
      <div className={HACKATHON_TIMELINE_CONTENT}>
        <div className={HACKATHON_TIMELINE_HEADER}>
          <Heading classes='text-black' underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Hack the Change</Heading>
        </div>
        {HACKATHONS.map((hackathon, index) => (
          <HackathonSection hackathon={hackathon} key={index} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default HackathonTimeline;
