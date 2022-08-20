/* eslint-disable @next/next/no-img-element */
const HEADER_CONTAINER = "bg-[#7055FD] text-white font-semibold text-4xl px-20 py-10 hidden md:flex";
const IMPACT_CONTAINER = "bg-white w-full my-10 hidden md:flex";
const IMPACT_MOBILE_CONTAINER = "bg-white w-full my-5 md:hidden";

const IMPACT_SVG = "/svgs/impact/impact.svg";
const IMPACT_MOBILE_SVG = "/svgs/impact/impact_mobile.svg";

const Impact = () => {
  return (
    <>
      <div className={HEADER_CONTAINER}>Over the course of our efforts, we have...</div>
      <img src={IMPACT_SVG} alt="" className={IMPACT_CONTAINER} />
      <img src={IMPACT_MOBILE_SVG} alt="" className={IMPACT_MOBILE_CONTAINER} />
    </>
  );
};

export default Impact;
