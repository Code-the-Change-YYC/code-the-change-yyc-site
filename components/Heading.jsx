/* eslint-disable @next/next/no-img-element */
const HEADING_CONTAINER = "py-5 flex flex-col items-center";

const LONG_UNDERLINE_DIR = "/svgs/long_heading_underline.svg";
const SHORT_UNDERLINE_DIR = "/svgs/short_heading_underline.svg";

const Heading = ({ classes, longUnderline = false, children }) => {
  return (
    <div className={HEADING_CONTAINER}>
      <h1 className={`text-5xl font-semibold ${classes}`}>{children}</h1>
      <img src={longUnderline ? LONG_UNDERLINE_DIR : SHORT_UNDERLINE_DIR} alt="" />
    </div>
  );
};

export default Heading;
