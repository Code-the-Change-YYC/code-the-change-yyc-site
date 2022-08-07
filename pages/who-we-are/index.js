import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import Heading from "../../components/Heading";

const FAQDropdown = ({ prompt, content }) => {
  return (
    <div className="w-full rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>{prompt}</span>
              <FaAngleDown className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">{content}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

const WhoWeAre = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col bg-white px-10 md:px-24 lg:px-48 w-full">
        <Heading>FAQ</Heading>
        <div className="flex flex-col py-10 w-full">
          <FAQDropdown prompt="test" content="test" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
