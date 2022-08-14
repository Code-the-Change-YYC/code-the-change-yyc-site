import Avatar from "./Avatar";
import { ALUMNI } from "../data/alumni";

const CARD_CONTAINER = "";
const CONTENT_CARD = "bg-[#7055FD] text-white flex flex-col rounded-lg";
const BACKGROUND_CARD = "bg-[#BAFBE4] rounded-lg";

const test = ALUMNI[0];

const AlumniCard = () => {
  return (
    <>
      <div className={CARD_CONTAINER}>
        <div className={CONTENT_CARD}>
          <Avatar
            file={`${test.file}`}
            name={`${test.name}`}
            position={`${test.position}`}
            prevRole={`${test.prevRole}`}
            classes="text-white"
          />
        </div>
        <div className={BACKGROUND_CARD}>BACKGROUND</div>
      </div>
    </>
  );
};

export default AlumniCard;
