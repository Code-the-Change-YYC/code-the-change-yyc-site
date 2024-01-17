import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const ICON_SIZE = 30;

const SocialMediaIcons = ({ classes }) => {
  return (
    <div className={`flex items-start pt-5 space-x-6 ${classes}`}>
      <Link href="https://www.facebook.com/CodeTheChangeYYC/" legacyBehavior>
        <FaFacebook size={ICON_SIZE} className="cursor-pointer" />
      </Link>
      <Link href="https://www.instagram.com/codethechangeyyc/" legacyBehavior>
        <FaInstagram size={ICON_SIZE} className="cursor-pointer" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/code-the-change-yyc/"
        legacyBehavior>
        <FaLinkedin size={ICON_SIZE} className="cursor-pointer" />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UC4wZt-bCL31HjxUF-zc5U_g"
        legacyBehavior>
        <FaYoutube size={ICON_SIZE} className="cursor-pointer" />
      </Link>
      <Link href="https://github.com/Code-the-Change-YYC" legacyBehavior>
        <FaGithub size={ICON_SIZE} className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
