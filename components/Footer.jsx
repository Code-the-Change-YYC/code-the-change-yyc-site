import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const footerContainer = "flex flex-col items-center justify-center text-[#A689FF] h-36";

const Footer = () => {
  return (
    <>
      <div className={footerContainer}>
        <h2 className="font-medium mb-3x">Keep Up With Us!</h2>
        <SocialMediaIcons />
        <h4 className="text-[#C5C5C5] font-light mt-6">Copyright @ Code the Change YYC</h4>
      </div>
    </>
  );
};
export default Footer;
