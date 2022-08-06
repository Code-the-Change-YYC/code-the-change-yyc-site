const HEADING_CONTAINER = "p-5 flex flex-col items-center";

const LONG_UNDERLINE_DIR = "/svgs/long_heading_underline.svg";
const SHORT_UNDERLINE_DIR = "/svgs/short_heading_underline.svg";

const Heading = ({ text, longUnderline = false }) => {
  const renderUnderline = () => <img src={longUnderline ? LONG_UNDERLINE_DIR : SHORT_UNDERLINE_DIR} />;

  return (
    <div className={HEADING_CONTAINER}>
      <h1 className="text-black text-5xl font-semibold">{text}</h1>
      {renderUnderline()}
    </div>
  );
};

export default Heading;
