const TextSection = ({ classes, children }) => {
  return <p className={`text-2xl font-medium ${classes}`}>{children}</p>;
};

export default TextSection;
