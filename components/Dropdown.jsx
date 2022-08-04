import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Dropdown = ({ title, titleClasses, children, optionsClasses, optionClasses }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={`inline-flex w-full justify-center items-center ${titleClasses}`}>
        <span className="mr-1">{title}</span>
        <ChevronDownIcon width={20} height={20} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {children}
      </Transition>
    </Menu>
  );
};

export default Dropdown;
