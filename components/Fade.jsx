import { Transition } from "@headlessui/react";

const Fade = ({ open, children }) => {
  return (
    <Transition
      show={open}
      enter="transition-opacity duration-250"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div>
        {children}
      </div>
    </Transition>
  );
};

export default Fade;
