import Heading from './Heading';
import Image from 'next/image';
import { UnderlineTypes } from '../utils/underlineType';

const HACKATHON_TIMELINE_CONTAINER = 'bg-white';
const HACKATHON_TIMELINE_HEADER = 'text-center'

const HackathonTimeline = () => {
    return (
        <div className={HACKATHON_TIMELINE_CONTAINER}>
            <div>
                <div className={HACKATHON_TIMELINE_HEADER}>
                    <Heading classes='text-black' underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Hack the Change</Heading>
                </div>
            </div>
        </div>
    );
}

export default HackathonTimeline;