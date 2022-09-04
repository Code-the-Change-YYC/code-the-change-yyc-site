import Button from "../components/Button";
import TextSection from "../components/TextSection.jsx";

const ErrorPage404 = () => {
  return (
    <div className="py-[10rem] pb-[17rem] md:pb-[25rem] text-center">
      <h1 className="text-9xl font-bold md:text-center text-[#7055FD] py-30">404</h1>
      <TextSection classes="text-[#a689ff] font-light pb-10 py-5">Page not found :(</TextSection>
      <center>
        <Button href="/" classes="max-w-[19rem] min-w-[19rem] p-[0.6rem] lg:p-[0.7rem] border-[#7055fd]">
          <p className="text-[1.5rem] font-[500] text-white">Return to home</p>
        </Button>
      </center>
    </div>
  );
};

export default ErrorPage404;
