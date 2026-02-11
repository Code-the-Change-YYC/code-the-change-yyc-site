import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';
import TextSection from './TextSection';
import Link from 'next/link';

const HACKATHON_TITLE = "text-center flex flex-wrap items-baseline gap-x-2 gap-y-2 pb-8 text-white justify-center text-4xl font-semibold ml-2 mx-auto sm:text-5xl md:text-5xl lg:text-5xl sm:mx-20 md:mx-auto lg:mx-auto";

const HackathonLink = () => {
  return (
    <div className="flex flex-col items-center bg-orange z-0 pb-12 md:pb-16 lg:pb-20">
      <div className="flex items-baseline space-x-4 pt-16 px-10 md:px-24 lg:px-48">
        <div className={HACKATHON_TITLE}>
          <span>Join the Change at our</span>
          <div className='text-center justify-center flex flex-wrap gap-x-2'>
            <Heading classes='!text-4xl sm:!text-5xl md:!text-5xl lg:!text-5xl' underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE} className="!py-0">
              <span>Hackathon: </span>
            </Heading>
            <span>Hack the Change</span>            
          </div>
          
        </div> 
      </div>
      
      <TextSection classes="text-white text-center justify-center pb-5 z-10 px-10 md:px-24 lg:px-48 md:py-4">
            Dive into collaborative innovation with Code the Change YYC&apos;s hackathons! Designed to empower 
            student developers and create real-world impact, our hackathons offer an exciting opportunity 
            to learn, build, and connect. Whether you&apos;re solving pressing challenges or sharpening your 
            skills, there&apos;s a place for everyone.
      </TextSection>
      <TextSection classes="text-white text-center justify-center pb-5 z-10 px-10 md:px-24 lg:px-48 md:py-4 font-medium">
            Explore upcoming events, resources, and more at: {' '}
      </TextSection>
      <TextSection classes="text-blue-800 text-center justify-center pb-10 z-20 px-10 md:px-24 lg:px-48 md:py-4">
        <Link 
          href="https://hackthechangeyyc.ca" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="">
          <span className="!text-regal-blue hover:text-regal-blue font-semibold underline">hackthechangeyyc.ca</span>
        </Link>
      </TextSection>
    </div>
  );
};

export default HackathonLink;
