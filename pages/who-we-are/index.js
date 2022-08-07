import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import Heading from "../../components/Heading";

const FAQS = [
  {
    prompt: "Do I need technical knowledge to join?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nec vitae ac faucibus. Blandit ultrices magna natoque enim quis suscipit. Vitae eget venenatis rhoncus aliquet curabitur mauris, sed turpis nulla. Neque molestie mi placerat ultrices sit in sit pretium.",
  },
  {
    prompt: "How much time should I expect to commit per week?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nec vitae ac faucibus. Blandit ultrices magna natoque enim quis suscipit. Vitae eget venenatis rhoncus aliquet curabitur mauris, sed turpis nulla. Neque molestie mi placerat ultrices sit in sit pretium.",
  },
  {
    prompt: "Question 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nec vitae ac faucibus. Blandit ultrices magna natoque enim quis suscipit. Vitae eget venenatis rhoncus aliquet curabitur mauris, sed turpis nulla. Neque molestie mi placerat ultrices sit in sit pretium.",
  },
];

const FAQDropdown = ({ prompt, content }) => {
  return (
    <div className="w-full rounded-2xl bg-white drop-shadow-md">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="items-center drop-shadow-md flex w-full justify-between rounded-lg bg-[#7055FD] px-8 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="text-white italic text-xl font-medium">"{prompt}"</span>
              <FaAngleDown className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-white`} />
            </Disclosure.Button>
            <Disclosure.Panel className="px-8 py-4 text-sm font-medium text-base">{content}</Disclosure.Panel>
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
        <div className="flex flex-col py-10 w-full space-y-4">
          {FAQS.map(({ prompt, content }) => (
            <FAQDropdown prompt={prompt} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
