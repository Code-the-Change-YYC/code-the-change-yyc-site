const TextSection = ({ classes, children }) => {
  return <div className={`text-2xl font-medium ${classes}`}>{children}</div>;
};

export default TextSection;
