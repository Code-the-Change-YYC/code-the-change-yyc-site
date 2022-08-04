import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Fade from "./Fade";

const Dropdown = ({ title, titleClasses, children, optionsClasses, optionClasses }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={`inline-flex w-full justify-center items-center ${titleClasses}`}>
        <span className="mr-1">{title}</span>
        <FaAngleDown width={20} height={20} />
      </Menu.Button>
      <Fade>{children}</Fade>
    </Menu>
  );
};

export default Dropdown;
