import React from 'react';
import TextSection from './TextSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
const PURPLE_SIDE_LINES_DIR = '/svgs/timeline/left_side_lines.svg';

const NEWS_CONTAINER = 'flex flex-col min-h-screen bg-white pt-10 z-0';
const CONTENT_CONTAINER = 'flex flex-col pt-14 p-5 md:px-32';
const NEWS_HEADER = 'flex flex-row';

const LONG_SQUIGGLY_LINE_SVG = '/svgs/events/long_events_squiggly_line.svg';

const LETTERS = [
  {
    prompt: 'Spring/Summer 2024',
    letter: 'Should link to the pdf here',
  },
  {
    prompt: 'Winter 2024',
    letter: 'Should link to the pdf here',
  },
];

const NewsDropdown = ({ prompt, letter }) => {
  return (
    <div className="w-full rounded-2xl bg-white drop-shadow-md">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="items-center drop-shadow-md flex w-full justify-between rounded-lg bg-[#00BA95] px-8 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="text-white italic text-xl font-medium">{prompt}</span>
              <FaAngleDown className={`${open && 'rotate-180 transform'} h-5 w-5 text-white`} />
            </Disclosure.Button>
            <Disclosure.Panel className="px-8 py-4 text-[#FF4D6F] text-xl font-semibold">{letter}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

const NewsLetterBanner = () => {
  return (
    <div className={NEWS_CONTAINER}>
      <div className={CONTENT_CONTAINER}>
        <div className={NEWS_HEADER}>
          <img src={PURPLE_SIDE_LINES_DIR}></img>
          <h1 className="text-5xl font-semibold text-[#FF4D6F]">Newsletter</h1>
        </div>
        <TextSection classes="text-black py-5 z-20">
          Stay in the loop with our monthly newsletter! Discover upcoming events like the annual Resume Roast and
          Hackathon, packed with key details and updates you won’t want to miss.
        </TextSection>
        <TextSection classes="text-black z-20">
          Not a subscriber yet? Sign up
          <Link href="/contact" className="text-[#FF4D6F]">
            <span> here </span>
          </Link>
          and never miss out!
        </TextSection>
        <div className="flex flex-col bg-white px-0 w-full overflow-y-auto scrollbar-hide h-full">
          <div className="flex flex-col py-10 w-full space-y-4">
            {LETTERS.map((props) => (
              <NewsDropdown key={props.prompt} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 w-full h-56 xl:h-96 bottom-0 absolute -z-10">
        <Image src={LONG_SQUIGGLY_LINE_SVG} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default NewsLetterBanner;
