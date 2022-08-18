import Heading from "./Heading";
import Avatar from "./Avatar";
import { EXECUTIVES } from "../data/executives";
import { UnderlineTypes } from "../utils/underlineType";

const EXECUTIVES_CONTAINER = "bg-white flex flex-col items-center mb";
const EXECUTIVE_LEVEL_CONTAINER = "flex flex-row flex-wrap justify-center w-full sm:w-9/12 mb-5";

const Executives = () => {
  return (
    <div className={EXECUTIVES_CONTAINER}>
      <Heading underlineType={UnderlineTypes.GREEN_LONG_UNDERLINE}>Executives</Heading>
      <div className={EXECUTIVE_LEVEL_CONTAINER}>
        {EXECUTIVES.map((props) => (
          <Avatar key={props.name} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Executives;
