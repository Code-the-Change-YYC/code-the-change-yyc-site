import Link from "next/link";

const Button = ({ classes, children, href }) => {
  return (
    <Link href={href}>
      <p
        className={`cursor-pointer rounded-full text-white border-4 border-white text-3xl font-bold p-4 bg-[#7055FD] ${classes}`}
      >
        {children}
      </p>
    </Link>
  );
};

export default Button;
