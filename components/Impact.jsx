/* eslint-disable @next/next/no-img-element */
const HEADER_CONTAINER = "bg-[#7055FD] text-white font-semibold text-4xl p-10 py-15";
const IMPACT_CONTAINER = "bg-white flex flex-col w-full my-10";

const IMPACT_SVG = "/svgs/impact/impact.svg";

const Impact = () => {
  return (
    <>
      <div className={HEADER_CONTAINER}>Over the course of our efforts, we have...</div>
      <img src={IMPACT_SVG} alt="" className={IMPACT_CONTAINER} />
    </>
  );
};

export default Impact;
