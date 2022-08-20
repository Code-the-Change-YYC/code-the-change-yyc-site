import Map from "../../components/Map";

/* eslint-disable @next/next/no-img-element */
const MAIL_DIR = "/svgs/contact/mail.svg";
const LONG_UNDERLINE_DIR = "/svgs/long_heading_underline.svg";

const Contact = () => {
  return (
    <div className="flex flex-col px-10 md:px-24 lg:px-48 py-20">
      <h1 className="text-5xl font-semibold ">Get in touch!</h1>
      <p className="pt-4 text-2xl">
        Wanna connect with us about a <strong>project</strong>, <strong>partnership</strong>, or{" "}
        <strong>anything else?</strong>
      </p>
      <p className="text-2xl">Reach us via our email</p>

      <div className="flex flex-col items-center w-full py-4">
        <img src={MAIL_DIR} alt="" width={200} />
        <a className="text-2xl font-semibold" href="mailto:codethechangeyyc@gmail.com">
          codethechangeyyc@gmail.com
        </a>
        <img src={LONG_UNDERLINE_DIR} alt="" width={200} />
      </div>

      <div className="py-10">
        <p className="italic font-medium text-2xl text-[#FF4D6F]">Other Code the Change chapters:</p>
      </div>

      <Map />
    </div>
  );
};

export default Contact;
