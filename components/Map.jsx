import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { LOCATIONS } from '../data/locations';
import { MAP } from '../data/map';

const DEFAULT_MARKER_TEXT_OFFSET = -10;

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [110, 0, 0],
        scale: 800,
        center: [6, 40],
      }}
    >
      <Geographies geography={MAP}>
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
