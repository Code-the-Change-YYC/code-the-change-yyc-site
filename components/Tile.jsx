const Tile = ({ children, classes }) => {
  return <span className={`bg-white rounded-lg p-5 drop-shadow-md ${classes}`}>{children}</span>;
};

export default Tile;
