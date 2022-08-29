import Link from "next/link";

const Button = (props) => {
  return <Link href={props.href}>
      <p
        className={`cursor-pointer rounded-full text-white border-4 ${props.borderColor} text-3xl font-bold ${props.padding} ${props.buttonBackground} ${props.classes}`}
      >
        {props.children}
      </p>
    </Link>

};

Button.defaultProps = {
  borderColor: "border-white",
  padding: "p-4",
  buttonBackground: "bg-[#7055FD]",
}

export default Button;
