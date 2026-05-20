import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6D5AE6] to-[#6A5AE0] text-white px-8 py-10">
      <div className="grid grid-cols-3 items-center w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-3 justify-center">
          <div className="flex items-center gap-3 w-[300px] justify-center">
            <h2 className="text-xl font-semibold leading-tight whitespace-nowrap">
              Code the Change YYC
            </h2>
            <Image
              src="/logo.png"
              alt="Code the Change YYC logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[300px] flex justify-center">
            <SocialMediaIcons classes="flex items-center justify-center gap-8 text-white text-2xl" />
          </div>
        </div>

        <div className="flex justify-center items-center -ml-11">
          <div className="w-[300px] flex justify-center">
            <Link href="https://www.codethechangeyyc.ca/contact">
              <button className="bg-white text-[#6D5AE6] px-6 py-2 rounded-full font-medium shadow-md">
                Keep Up With Us!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8"></div>

      <p className="text-center text-sm text-white/70 mt-4">
        © 2026 Code the Change YYC
      </p>
    </footer>
  );
};

export default Footer;
