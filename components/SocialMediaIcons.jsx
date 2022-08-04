import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const ICON_SIZE = 30;

const SocialMediaIcons = () => {
  return (
    <div className="flex items-start pt-5 text-[#FFD2DC] space-x-6">
      <Link href="https://www.facebook.com/CodeTheChangeYYC/">
        <FaFacebook size={ICON_SIZE} />
      </Link>
      <Link href="https://www.instagram.com/codethechangeyyc/">
        <FaInstagram size={ICON_SIZE} />
      </Link>
      <Link href="https://www.linkedin.com/company/code-the-change-yyc/">
        <FaLinkedin size={ICON_SIZE} />
      </Link>
      <Link href="https://www.youtube.com/channel/UC4wZt-bCL31HjxUF-zc5U_g">
        <FaYoutube size={ICON_SIZE} />
      </Link>
      <Link href="https://github.com/Code-the-Change-YYC">
        <FaGithub size={ICON_SIZE} />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
