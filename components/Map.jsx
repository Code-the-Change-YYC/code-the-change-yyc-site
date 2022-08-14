import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const markers = [
  {
    name: "University of Calgary",
    coordinates: [-114.08529, 51.05011],
  },
  {
    name: "Vancouver (UBC)",
    coordinates: [-123.1207, 49.2827],
    offset: 15,
  },
  {
    name: "Stanford",
    coordinates: [-122.1697, 37.4275],
  },
];

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
      {markers.map(({ name, coordinates, offset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={3} fill="#FF4D6F" />
          <text textAnchor="middle" y={offset || -10}>
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
