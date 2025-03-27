import React from 'react';
import TextSection from './TextSection';
import Image from 'next/image';
import Link from 'next/link';
import NewsCarousel from './NewsCarousel';

const NEWS_CONTAINER = 'flex flex-col min-h-screen bg-white pt-10 z-0';
const CONTENT_CONTAINER = 'flex flex-col pt-14 p-5 md:px-32';
const NEWS_HEADER = 'flex flex-row';

const RED_SQUIGGLY_LINE = '/svgs/newsletter/Vector 41.svg';
const PINK_SQUIGGLY_LINE = '/svgs/newsletter/Vector 49.svg';
const GREEN_SQUIGGLY_LINE = '/svgs/newsletter/Vector 46.svg';

const NEWSLETTER1 = [
  {
    title: 'Fall 2024',
    month: 'October',
    link: '/newsletters/october2024NewsLetter.pdf',
    image: '/images/newsletter/oct2024.jpg',
    pdf_name: 'october2024NewsLetter.pdf',
  },
  {
    title: 'Fall 2024',
    month: 'November',
    link: '/newsletters/november2024NewsLetter.pdf',
    image: '/images/newsletter/nov2024.jpg',
    pdf_name: 'november2024NewsLetter.pdf',
  },
];

const NewsLetterBanner = () => {
  return (
    <div className={NEWS_CONTAINER}>
      <div className={CONTENT_CONTAINER}>
        <div className="absolute top-[-20px] left-0 w-full h-[50px] flex justify-start"></div>
        <div className={NEWS_HEADER}>
          <h1 className="text-5xl font-semibold text-[#FF4D6F]">Newsletter</h1>
        </div>
        <TextSection classes="text-black py-5 z-20">
          Stay in the loop with our monthly newsletter! Discover upcoming events like the annual Resume Roast and
          Hackathon, packed with key details and updates you won’t want to miss.
        </TextSection>
        {/* Need to Add signup for newsletter functionality */}
        <TextSection classes="text-black z-20">
          Not a subscriber yet? Sign up
          <Link href="/contact" className="text-[#FF4D6F]">
            <span> here </span>
          </Link>
          and never miss out!
        </TextSection>
        <div className="flex flex-col bg-white px-0 w-full overflow-y-auto scrollbar-hide h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-10 w-full justify-items-center">
            <NewsCarousel news={NEWSLETTER1}></NewsCarousel>
          </div>
        </div>
      </div>
      <div className="relative w-screen h-0 md:h-[340px] overflow-hidden">
        <Image
          src={RED_SQUIGGLY_LINE}
          alt=""
          width={603}
          height={173}
          className="absolute top-[100px] left-0 scale-0 md:scale-110 z-[-10]"
        />
        <Image
          src={PINK_SQUIGGLY_LINE}
          alt=""
          width={945}
          height={275}
          className="absolute top-[60px] left-10 scale-0 md:scale-110 z-[-10]"
        />
        <Image
          src={GREEN_SQUIGGLY_LINE}
          alt=""
          width={1505}
          height={167}
          className="absolute top-[20px] left-10 scale-0 md:scale-110 z-[-10] w-full"
        />
      </div>
    </div>
  );
};

export default NewsLetterBanner;
