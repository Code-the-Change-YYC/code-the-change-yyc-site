const Tile = (props) => {
  return <span className={`bg-white rounded-lg p-4 drop-shadow-md ${props.classes}`}>{props.children}</span>;
};
export default Tile;
