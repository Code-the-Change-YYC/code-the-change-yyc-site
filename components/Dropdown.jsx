import { Menu } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import Fade from "./Fade";

const SIZE = 20;

const Dropdown = ({ title, titleClasses, children }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={`inline-flex w-full justify-center items-center ${titleClasses}`}>
        <span className="mr-1">{title}</span>
        <FaAngleDown width={SIZE} height={SIZE} />
      </Menu.Button>
      <Fade>{children}</Fade>
    </Menu>
  );
};

export default Dropdown;
