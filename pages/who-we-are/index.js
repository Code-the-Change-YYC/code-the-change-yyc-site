import { Disclosure } from '@headlessui/react';
import { FaAngleDown } from 'react-icons/fa';
import About from '../../components/About';
import Executives from '../../components/Executives';
import Heading from '../../components/Heading';
import AlumniHighlights from '../../components/AlumniHighlights';
import Timeline from '../../components/Timeline';
import { FAQS } from '../../data/faq';
import Events from '../../components/Events';
import { fetchContent } from '../../api/apiRoot';

export async function getStaticProps() {
  const alumni = await fetchContent('alumni');
  alumni.sort((a, b) => a.orderNumber - b.orderNumber);
  const timeline = await fetchContent('timeline');
  timeline.sort((a, b) => b.year - a.year);

  return { props: { alumni, timeline } };
}

const FAQDropdown = ({ prompt, content }) => {
  return (
    <div className="w-full rounded-2xl bg-white drop-shadow-md">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="items-center drop-shadow-md flex w-full justify-between rounded-lg bg-[#7055FD] px-8 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="text-white italic text-xl font-medium">&quot;{prompt}&quot;</span>
              <FaAngleDown className={`${open && 'rotate-180 transform'} h-5 w-5 text-white`} />
            </Disclosure.Button>
            <Disclosure.Panel className="px-8 py-4 text-sm font-medium">{content}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

const WhoWeAre = ({ alumni, timeline }) => {
  return (
    <div className="flex flex-col w-full -mt-5 md:mt-0 lg:mt-0">
      <div className="flex flex-col lg:flex-row">
        <About />
        <div className="scrollbar-hide overflow-y-auto">
          <Timeline timeline={timeline} />
        </div>
      </div>
      <Events />
      <Executives />
      <AlumniHighlights alumni={alumni} />
      <div className="flex flex-col bg-white px-10 md:px-24 lg:px-48 w-full py-10">
        <Heading>FAQ</Heading>
        <div className="flex flex-col py-10 w-full space-y-4">
          {FAQS.map((props) => (
            <FAQDropdown key={props.prompt} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
