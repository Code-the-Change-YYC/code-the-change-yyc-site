import Image from 'next/image';
import TextSection from './TextSection';
import { JOIN_ONE, JOIN_TWO } from '../data/join';
const JOIN_US_CONTAINER = 'bg-[#7055FD] flex flex-col';
const CONTENT_CONTAINER = 'flex flex-col pt-14 p-5 md:px-32';
const HEADING_CONTAINER = 'flex flex-row';
const PHOTO_ROW = 'flex flex-row justify-between flex-wrap lg:flex-nowrap';

const HEART_SYMBOL_SVG = '/svgs/join/heart_symbol.svg';
const DOWN_ARROW_SVG = '/svgs/join/down_arrow.svg';
const CRYSTAL_HEART_SVG = '/svgs/join/crystal_heart.svg';
const LONG_SQUIGGLY_LINE_SVG = '/svgs/join/long_squiggly_line.svg';

const JoinUs = () => {
  const TeamPhoto = ({ photo, classes }) => (
    <div
      className={`relative basis-2/5 grow w-48 h-48 md:w-60 md:h-60 lg:w-96 lg:h-96 mx-1 lg:mx-3 rounded-3xl overflow-hidden border-2 border-white ${classes}`}
    >
      <Image src={photo} alt="Team event photo" layout="fill" objectFit="cover" placeholder="blur" />
    </div>
  );

  return (
    <div className={JOIN_US_CONTAINER}>
      <div className={CONTENT_CONTAINER}>
        <div className={HEADING_CONTAINER}>
          <h1 className={`text-5xl font-semibold text-white`}>Join Us!</h1>
          <div className="-mt-2">
            <Image src={HEART_SYMBOL_SVG} alt="" height={70} width={70} />
          </div>
        </div>
        <TextSection classes="text-white pb-10 z-20">
          We are a welcoming and diverse team of students united by the mission of bettering our society through code.
          Regardless of what background you come from, if you are interested in making the world a better place -
          <strong className="text-bold text-[#FFD2DC]"> then please look to apply to our team!</strong>
        </TextSection>
        <div className="ml-auto -mt-14 -mb-10">
          <Image src={DOWN_ARROW_SVG} alt="" height={100} width={100} />
        </div>
        <div className={PHOTO_ROW}>
          {JOIN_ONE.map(({ key, photo, classes }) => (
            <TeamPhoto key={key} photo={photo} classes={classes} />
          ))}
        </div>
        <div className={`${PHOTO_ROW} hidden lg:flex`}>
          {JOIN_TWO.map(({ key, ...props }) => (
            <TeamPhoto key={key} {...props} />
          ))}
        </div>
      </div>
      <div className="-mt-10 w-44 h-44 relative">
        <Image src={CRYSTAL_HEART_SVG} alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="-mt-24 w-full h-56 xl:h-80 relative">
        <Image src={LONG_SQUIGGLY_LINE_SVG} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default JoinUs;
