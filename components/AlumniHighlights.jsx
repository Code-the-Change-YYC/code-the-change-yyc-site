import Image from 'next/image';

import Heading from './Heading';
import AlumniCarousel from './AlumniCarousel';
import { UnderlineTypes } from '../utils/underlineType';

const ALUMNI_CONTAINER = 'flex flex-col items-center h-[95rem] md:h-[65rem] bg-[#FF6B54] pt-10 shadow-xl z-0';
const ALUMNI_HEADER = 'pb-10 w-4/5 flex items-left';
const SPARKLE_IMG = 'ml-5 mb-5 w-16';

const AlumniHighlights = ({ alumni }) => {
  const HeaderContent = (
    <span className="flex flex-row mb-5 md:items-end">
      Alumni Highlights
      <div className={SPARKLE_IMG}>
        <Image alt="" src="/svgs/white_sparkle.svg" height={70} width={70} />
      </div>
    </span>
  );

  return (
    <div className={ALUMNI_CONTAINER}>
      <div className={ALUMNI_HEADER}>
        <div className="hidden lg:flex">
          <Heading classes="text-white" underlineType={UnderlineTypes.WHITE_LONG_UNDERLINE}>
            {HeaderContent}
          </Heading>
        </div>
        <div className="lg:hidden">
          <Heading classes="text-white" underlineType={UnderlineTypes.WHITE_CURLY_UNDERLINE}>
            {HeaderContent}
          </Heading>
        </div>
      </div>
      <AlumniCarousel alumni={alumni} />
    </div>
  );
};

export default AlumniHighlights;
