import Heading from './Heading';
import Image from 'next/image';
import { UnderlineTypes } from '../utils/underlineType';
import { HACKATHONS } from '../data/hackathons';

const HACKATHON_TIMELINE_CONTAINER = 'bg-white';
const HACKATHON_TIMELINE_HEADER = 'text-center'


const HackathonTimeline = () => {
    return (
        <div className={HACKATHON_TIMELINE_CONTAINER}>
            <div>
                <div className={HACKATHON_TIMELINE_HEADER}>
                    <Heading classes='text-black' underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Hack the Change</Heading>
                </div>
                {HACKATHONS.map((hackathon) => (
                    <div className='flex-col justify-center text-center text-xl px-[50px] font-bold mb-[70px]'>
                        <h1 className='text-5xl pb-[15px] italic'>
                            {hackathon.year}
                        </h1>
                        <div className='w-65 h-70'>
                            <Image className='object-cover' src={hackathon.img} />
                        </div>
                        <p className='text-left my-[15px] text-[#FF4D6F]'>
                            Topics:  {hackathon.topic}
                        </p>
                        <p className='font-medium'>{hackathon.blurb}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HackathonTimeline;