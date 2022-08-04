import React from "React";

import { SiInstagram, SiFacebook, SiLinkedin, SiYoutube, SiGithub } from "react-icons/si";

const mobileContainer = "flex flex-col items-center justify-center text-[#A689FF] h-36";
const iconContainer = "flex justify-evenly my-4";
const iconsStyle = "text-[#7055FD] text-3xl px-4";

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
      <div className={mobileContainer}>
        <h2 className="font-medium">Keep Up With Us!</h2>
        <ul className={iconContainer}>
          {icons.map((app) => (
            <li key={app.name} className={iconsStyle} onClick={() => handleClick(app.link)}>
              {app.logo}
            </li>
          ))}
        </ul>
        <h4 className="text-[#C5C5C5] font-light">Copyright @ Code The Change YYC</h4>
      </div>
    </>
  );
};
export default Footer;
