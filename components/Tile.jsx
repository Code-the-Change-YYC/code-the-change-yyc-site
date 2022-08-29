const Tile = (props) => {
  return <span className={`bg-white ${props.edgeRounding} ${props.padding} drop-shadow-md ${props.classes}`}>{props.children}</span>;
};

Tile.defaultProps = {
  edgeRounding: "rounded-lg",
  padding: "p-4",
}

export default Tile;
