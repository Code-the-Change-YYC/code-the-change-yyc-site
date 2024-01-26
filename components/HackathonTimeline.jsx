import Heading from './Heading';
import Image from 'next/image';
import { UnderlineTypes } from '../utils/underlineType';
import { HACKATHONS } from '../data/hackathons';

const HACKATHON_TIMELINE_CONTAINER = 'bg-white';
const HACKATHON_TIMELINE_HEADER = 'text-center'
const HACKATHON_TIMELINE_CONTENT = 'flex-col justify-center text-center text-xl px-[50px] font-bold mb-[70px]'
const HACKATHON_TITLE_YEAR = 'text-5xl pb-[15px] italic'
const HACKATHON_IMAGE = 'w-65 h-70'

const HackathonSection = ({ hackathon }) => {
    return (
        <div className={HACKATHON_TIMELINE_CONTENT}>
            <h1 className={HACKATHON_TITLE_YEAR}>
                 {hackathon.year}
            </h1>
            <div className={HACKATHON_IMAGE}>
                <Image className='object-cover rounded-xl' src={hackathon.img} />
            </div>
            <div>
                <p className='text-left my-[15px] text-[#FF6B54]'>
                    Topics:  {hackathon.topic}
                </p>
                <p className='font-medium'>{hackathon.blurb}</p>
            </div>
        </div>
    );
}

const HackathonTimeline = () => {
    return (
        <div className={HACKATHON_TIMELINE_CONTAINER}>
            <div>
                <div className={HACKATHON_TIMELINE_HEADER}>
                    <Heading classes='text-black' underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Hack the Change</Heading>
                </div>
                {HACKATHONS.map((hackathon) => (
                    <HackathonSection hackathon={hackathon} />
                ))}
            </div>
        </div>
    );
}

export default HackathonTimeline;