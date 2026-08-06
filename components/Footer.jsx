import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#7055FD] to-[#7055FD] text-white px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full">

        <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-3 justify-center md:justify-start">
          <h2 className="text-lg md:text-xl font-semibold leading-tight text-center lg:text-left">
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

        <div className="flex justify-center items-center">
          <SocialMediaIcons classes="flex items-center justify-center gap-6 md:gap-8 text-white text-xl md:text-2xl" />
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <Link
            href="/contact"
            className="
              bg-white text-[#6D5AE6]
              px-4 md:px-6
              py-2
              text-sm md:text-base
              rounded-full
              font-medium
              shadow-md
              inline-block
              whitespace-nowrap
            "
          >
            Keep Up With Us!
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8"></div>

      <p className="text-center text-sm text-white/70 mt-4">
        © {new Date().getFullYear()} Code the Change YYC
      </p>
    </footer>
  );
};

export default Footer;
