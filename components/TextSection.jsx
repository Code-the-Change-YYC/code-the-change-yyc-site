const TextSection = ({ classes, children }) => {
  return <p className={`text-2xl md:text-white font-medium ${classes}`}>{children}</p>;
};

export default TextSection;
