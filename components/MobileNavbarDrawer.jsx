import React, { useState } from "react";

const textClasses = "text-4xl font-semibold text-white";

const NestedLinks = ({ options }) => {
  return (
    <div className="ml-5 flex flex-col font-normal text-white">
      {options.map((option) => {
        const link = option.toLowerCase().split(" ").join("-");
        return (
          <a key={option} href={`/${link}`} className="text-xl py-1">
            / {option}
          </a>
        );
      })}
    </div>
  );
};

const MobileNavbarDrawer = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleClick = (link) => {
    if (selectedLink === link) {
      setSelectedLink(null);
    } else {
      setSelectedLink(link);
    }
  };

  return (
    <div className="flex flex-col space-y-2 bg-[#FF4D6F] rounded-b-2xl z-5 -mt-5 p-10 absolute top-full w-full">
      <h1
        className={`cursor-pointer ${textClasses} ${selectedLink === "about" ? "underline" : ""}`}
        onClick={() => handleClick("about")}
      >
        About
      </h1>
      {selectedLink === "about" && <NestedLinks options={["Who we are", "Projects"]} />}
      <h1
        className={`cursor-pointer ${textClasses} ${selectedLink === "news" ? "underline" : ""}`}
        onClick={() => handleClick("news")}
      >
        News
      </h1>
      {selectedLink === "news" && <NestedLinks options={["Announcements", "Blog"]} />}
      <a className={textClasses} href="partnerships">
        Partnerships
      </a>
      <a className={textClasses} href="contact">
        Contact
      </a>
      <a className={textClasses} href="join">
        Join
      </a>
    </div>
  );
};

export default MobileNavbarDrawer;
