/* eslint-disable @next/next/no-img-element */
import TextSection from "./TextSection";

const IMPACT_CONTAINER = "bg-white flex flex-col w-full";
const LEVEL_CONTAINER = "flex flex-row justify-between items-center";

const NON_PROFIT_PICTURE_DIR = "/images/impact/non_profit_picture.png";
const NON_PROFIT_LEFT_LINE_SVG = "/svgs/impact/non_profit_left_line.svg";
const NON_PROFIT_UNDERLINE_SVG = "/svgs/impact/non_profit_underline.svg";

const Impact = () => {
  const NonProfitProjectCount = (
    <div className="flex flex-row flex-start">
      <img src={NON_PROFIT_LEFT_LINE_SVG} alt="" className="mt-16" />
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-bold text-[#7055FD]">11</h1>
        <img src={NON_PROFIT_UNDERLINE_SVG} alt="" className="w-32" />
        <TextSection className="pl-10">non-profit projects</TextSection>
      </div>
    </div>
  );

  const NonProfitPicture = <img src={NON_PROFIT_PICTURE_DIR} alt="Non-profit picture" className="w-48" />;

  return (
    <div className={IMPACT_CONTAINER}>
      <div className={LEVEL_CONTAINER}>
        {NonProfitProjectCount}
        {NonProfitPicture}
      </div>
    </div>
  );
};

export default Impact;
