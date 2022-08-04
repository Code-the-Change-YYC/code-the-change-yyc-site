import React from "react";

import { SiInstagram, SiFacebook, SiLinkedin, SiYoutube, SiGithub } from "react-icons/si";

const footerContainer = "flex flex-col items-center justify-center text-[#A689FF] h-36 md:text-[#FFFFFF] md:bg-[#7055FD]";
const iconContainer = "flex flex-row space-x-8";
const iconsStyle = "text-[#7055FD] text-3xl md:text-[#FFFFFF] md:cursor-pointer md:text-4xl";

const icons = [
  { name: "facebook", link: "https://www.facebook.com/CodeTheChangeYYC", logo: <SiFacebook /> },
  { name: "instagram", link: "https://www.instagram.com/codethechangeyyc/", logo: <SiInstagram /> },
  { name: "linkedin", link: "https://www.linkedin.com/company/codethechangeyyc/", logo: <SiLinkedin /> },
  { name: "youtube", link: "https://www.youtube.com/channel/UC4wZt-bCL31HjxUF-zc5U_g", logo: <SiYoutube /> },
  { name: "github", link: "https://github.com/Code-the-Change-YYC", logo: <SiGithub /> },
];

const handleClick = (link) => {
	window.open(link);
};

const Footer = () => {
  return (
    <>
      <div className={footerContainer}>
        <h2 className="font-medium mb-3 md:text-[#A689FF]">Keep Up With Us!</h2>
        <ul className={iconContainer}>
          {icons.map((app) => (
            <li key={app.name} className={iconsStyle} onClick={() => handleClick(app.link)}>
              {app.logo}
            </li>
          ))}
        </ul>
        <h4 className="text-[#C5C5C5] font-light mt-6">Copyright @ Code The Change YYC</h4>
      </div>
    </>
  );
};
export default Footer;
