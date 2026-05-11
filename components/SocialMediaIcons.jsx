import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';

const ICON_SIZE = 30;

const SocialMediaIcons = ({ classes }) => {
  return (
    <div className={`flex items-center justify-center gap-8 ${classes}`}>
      <Link href="https://www.facebook.com/CodeTheChangeYYC/">
        <FaFacebook className="w-6 h-6 cursor-pointer" />
      </Link>
      <Link href="https://www.instagram.com/codethechangeyyc/">
        <FaInstagram className="w-6 h-6 cursor-pointer" />
      </Link>
      <Link href="https://www.tiktok.com/@codethechangeyyc/">
        <FaTiktok className="w-6 h-6 cursor-pointer" />
      </Link>
      <Link href="https://www.linkedin.com/company/code-the-change-yyc/">
        <FaLinkedin className="w-6 h-6 cursor-pointer" />
      </Link>
      <Link href="https://www.youtube.com/channel/UC4wZt-bCL31HjxUF-zc5U_g">
        <FaYoutube className="w-6 h-6 cursor-pointer" />
      </Link>
      <Link href="https://github.com/Code-the-Change-YYC">
        <FaGithub className="w-6 h-6 cursor-pointer" />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;