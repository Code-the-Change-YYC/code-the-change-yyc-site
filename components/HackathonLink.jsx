
import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import TextSection from './TextSection';
import Link from 'next/link';



const HackathonLink = () => {
    return (
    <div className="flex flex-col items-center bg-orange z-0 pb-12 md:pb-16 lg:pb-20">
        <div className="flex items-baseline space-x-4 mb-4 pt-16 px-10 md:px-24 lg:px-48">
            <Heading classes="text-white text-[2.25rem]" underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>
            Join the Change at Our Hackathons: Hack the Change
            </Heading>
        </div>
        <TextSection classes="text-white pb-5 z-10 px-10 md:px-24 lg:px-48 md:py-4">
            Dive into collaborative innovation with Code the Change YYC's hackathons! Designed to empower 
            student developers and create real-world impact, our hackathons offer an exciting opportunity 
            to learn, build, and connect. Whether you're solving pressing challenges or sharpening your 
            skills, there's a place for everyone.
        </TextSection>
        <TextSection classes="text-white pb-5 z-10 px-10 md:px-24 lg:px-48 md:py-4 font-medium">
            Explore upcoming events, resources, and more at: {' '}
        </TextSection>
        <TextSection classes="text-white pb-10 z-20 px-10 md:px-24 lg:px-48 md:py-4">
            <Link 
                href="https://hackthechangeyyc.ca" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue font-semibold underline">
                <span>hackthechangeyyc.ca</span>
            </Link>
       </TextSection>
    </div>
    );
};

export default HackathonLink;