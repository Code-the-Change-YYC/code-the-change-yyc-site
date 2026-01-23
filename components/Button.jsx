import Link from 'next/link';

const Button = (props) => {
  return (
    <Link href={props.href}>
      <div
        className={`cursor-pointer rounded-full text-white border-white p-4 bg-[#7055FD] border-4 text-3xl font-bold ${props.classes}`}
      >
        {props.children}
      </div>
    </Link>
  );
};

export default Button;
