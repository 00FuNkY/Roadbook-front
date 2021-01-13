import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const markers = [
  {
    markerOffset: -5,
    name: "Paris",
    coordinates: [2.3488, 48.8534],
  },
  { markerOffset: 15, name: "Madrid", coordinates: [-3.70256, 40.4165] },
  { markerOffset: -5, name: "Lisbonne", coordinates: [-9.13333, 38.71667] },
  { markerOffset: -5, name: "Londres", coordinates: [-0.12574, 51.50853] },
  { markerOffset: 15, name: "Rome", coordinates: [12.51133, 41.89193] },
  { markerOffset: -5, name: "Berlin", coordinates: [13.41053, 52.52437] },
  { markerOffset: -5, name: "Bruxelles", coordinates: [4.34878, 50.85045] },
  { markerOffset: -5, name: "Moscou", coordinates: [37.61556, 55.75222] },
  { markerOffset: -5, name: "Dublin", coordinates: [-6.24889, 53.33306] },
  { markerOffset: 15, name: "Vienne", coordinates: [16.37208, 48.20849] },
  { markerOffset: -5, name: "Copenhague", coordinates: [12.56553, 55.67594] },
  { markerOffset: 15, name: "Minsk", coordinates: [27.56667, 53.9] },
  { markerOffset: -5, name: "Sofia", coordinates: [23.32415, 42.69751] },
  { markerOffset: 15, name: "Zagreb", coordinates: [15.97798, 45.81444] },
  { markerOffset: -5, name: "Helsinki", coordinates: [24.93545, 60.16952] },
  { markerOffset: -5, name: "Athènes", coordinates: [23.71622, 37.97945] },
  { markerOffset: 20, name: "Budapest", coordinates: [19.03991, 47.49801] },
  { markerOffset: -5, name: "Reykjavik", coordinates: [-21.89541, 64.13548] },
  {
    markerOffset: -5,
    name: "Andorre-la-vieille",
    coordinates: [1.52109, 42.50779],
  },
  { markerOffset: -5, name: "Sarajevo", coordinates: [18.35644, 43.84864] },
  { markerOffset: -5, name: "Nicosie", coordinates: [33.3642, 35.17531] },
  { markerOffset: 15, name: "Tallinn", coordinates: [24.75353, 59.43696] },
  { markerOffset: -5, name: "Pristina", coordinates: [21.16688, 42.67272] },
  { markerOffset: -5, name: "Riga", coordinates: [24.10589, 56.946] },
  { markerOffset: -10, name: "Vilnius", coordinates: [25.2798, 54.68916] },
  { markerOffset: -5, name: "Luxembourg", coordinates: [6.13, 49.61167] },
  { markerOffset: 20, name: "Skopje", coordinates: [21.43141, 41.99646] },
  { markerOffset: -5, name: "Chişinău", coordinates: [28.8575, 47.00556] },
  { markerOffset: 10, name: "Podgorica", coordinates: [19.26361, 42.44111] },
  { markerOffset: -5, name: "Oslo", coordinates: [10.74609, 59.91273] },
  { markerOffset: -15, name: "Amsterdam", coordinates: [4.88969, 52.37403] },
  { markerOffset: -5, name: "Varsovie", coordinates: [21.01178, 52.22977] },
  { markerOffset: -5, name: "Prague", coordinates: [14.42076, 50.08804] },
  { markerOffset: -5, name: "Bucarest", coordinates: [26.10626, 44.43225] },
  { markerOffset: -10, name: "Belgrade", coordinates: [20.46513, 44.80401] },
  { markerOffset: -5, name: "Bratislava", coordinates: [17.10674, 48.14816] },
  { markerOffset: -5, name: "Ljubljana", coordinates: [14.50513, 46.05108] },
  { markerOffset: -5, name: "Berne", coordinates: [7.44744, 46.94809] },
  { markerOffset: 15, name: "Stockholm", coordinates: [18.0649, 59.33258] },
  { markerOffset: -5, name: "Kiev", coordinates: [30.5238, 50.45466] },
];

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap
        data-tip=""
        projectionConfig={{ rotate: [-1.0, -52.0, 0], scale: 950 }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => {
                  console.log(geo);
                }}
                onMouseOver={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D", pointerEvents: 'none' }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
