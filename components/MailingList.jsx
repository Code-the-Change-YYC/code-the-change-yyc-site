import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
const MAILING_LIST_CONTAINER = 'bg-[#7055FD] flex flex-col text-center';
const CONTENT_CONTAINER = 'flex flex-col p-5 md:px-32 text-center';
const HEADING_CONTAINER = 'flex flex-row text-center justify-center';
const LINK_TO_MAILING_LIST =
  'https://docs.google.com/forms/d/e/1FAIpQLSfusGF-TTs6nXfBCodQuuDWqx7DnTrm6GF4c-CeDVUt1m_plA/viewform';
const MailingList = () => {
  return (
    <div className={MAILING_LIST_CONTAINER}>
      <div className={CONTENT_CONTAINER}>
        <div className={HEADING_CONTAINER}>
          <h1 className="text-5xl font-semibold text-white pr-4 flex flex-col justify-center text-center items-center sm:flex-row space-x-2">
            <button className="font-extrabold underline rounded p-2 w-fit hover:opacity-85">
              <Link href={LINK_TO_MAILING_LIST}>Join </Link>
            </button>
            <div>our Mailing list!</div>
            <FaEnvelope size={45} color="white" className="hidden sm:block align-middle" />
          </h1>
        </div>
        <div className="text-lg text-white font-semibold">The link to our mailing list is also in our link tree </div>
      </div>
    </div>
  );
};

export default MailingList;
