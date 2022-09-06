import React from "react";
import Heading from "./Heading";
import { UnderlineTypes } from "../utils/underlineType";
import TextSection from "./TextSection";

const EVENTS_CONTAINER = "flex flex-col items-center h-[65rem] bg-[#BAFBE4] pt-10 shadow-xl z-0";
const CONTENT_CONTAINER = "flex flex-col pt-14 p-5 md:px-32";
const EVENTS_HEADER = "flex flex-row";

const Events = () => {
  const HeaderContent = <span className="flex flex-row mb-2 md:items-end">Events</span>;

  return (
    <div className={EVENTS_CONTAINER}>
      <div className={CONTENT_CONTAINER}>
        <div className={EVENTS_HEADER}>
          <Heading underlineType={UnderlineTypes.PURPLE_SHORT_UNDERLINE}>Events</Heading>
        </div>
        <TextSection classes="text-black pb-10 z-20">
          Looking to work with an energetic and enthusiastic group of postsecondary students on improving awareness
          around technology for social impact? We host a variety of workshops and hackathons every year, blending
          together ideas around software development and social good.
        </TextSection>
      </div>
    </div>
  );
};

export default Events;
