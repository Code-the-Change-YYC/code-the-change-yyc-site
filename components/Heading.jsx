import { UnderlineTypes } from '../utils/underlineType';

/* eslint-disable @next/next/no-img-element */

const GREEN_LONG_UNDERLINE_DIR = '/svgs/long_heading_underline.svg';
const GREEN_SHORT_UNDERLINE_DIR = '/svgs/short_heading_underline.svg';
const PURPLE_SHORT_UNDERLINE_DIR = '/svgs/timeline/purple_heading_underline.svg';
const WHITE_SINGLE_LINE_DIR = '/svgs/white_long_underline.svg';
const WHITE_CURLY_LINE_DIR = '/svgs/white_alumni_underline.svg';
const BEIGE_SHORT_UNDERLINE_DIR = '/svgs/beige_underline.svg';
const PINK_UNDERLINE_DIR = '/svgs/pink_underline.svg';

const Heading = ({
  classes = '',
  // distanceFromTop = 0,
  underlineType = UnderlineTypes.GREEN_SHORT_UNDERLINE,
  width = 'w-4/5',
  children,
}) => {
  const getUnderline = () => {
    switch (underlineType) {
      case UnderlineTypes.GREEN_LONG_UNDERLINE:
        return GREEN_LONG_UNDERLINE_DIR;
      case UnderlineTypes.GREEN_SHORT_UNDERLINE:
        return GREEN_SHORT_UNDERLINE_DIR;
      case UnderlineTypes.PURPLE_SHORT_UNDERLINE:
        return PURPLE_SHORT_UNDERLINE_DIR;
      case UnderlineTypes.WHITE_LONG_UNDERLINE:
        return WHITE_SINGLE_LINE_DIR;
      case UnderlineTypes.WHITE_CURLY_UNDERLINE:
        return WHITE_CURLY_LINE_DIR;
      case UnderlineTypes.BEIGE_SHORT_UNDERLINE:
        return BEIGE_SHORT_UNDERLINE_DIR;
      case UnderlineTypes.PINK_UNDERLINE:
        return PINK_UNDERLINE_DIR;
    }
  };

  return (
    <div className="relative inline-block text-center">
      <span className={`relative z-10 ${classes} text-5xl font-semibold`}>{children}</span>
      {underlineType !== 'None' && <img src={getUnderline()} alt="squiggly" className={`${width} mx-auto`} />}
    </div>
  );
};

export default Heading;
