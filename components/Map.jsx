import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { LOCATIONS } from "../data/locations";

const GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";
const DEFAULT_MARKER_TEXT_OFFSET = -10;

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [110, 0, 0],
        scale: 800,
        center: [0, 40],
      }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />)
        }
      </Geographies>
      {LOCATIONS.map(({ name, coordinates, offset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={3} fill="#FF4D6F" />
          <text textAnchor="middle" y={offset || DEFAULT_MARKER_TEXT_OFFSET}>
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
