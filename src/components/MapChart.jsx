import React, { memo, useContext, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { context } from "./context";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -5,
    name: "Paris",
    coordinates: [2.3488, 48.8534],
    rsmKey: 'geo-55'
  },
  { markerOffset: 15, name: "Madrid", coordinates: [-3.70256, 40.4165], rsmKey: 'geo-49' },
  { markerOffset: -5, name: "Lisbonne", coordinates: [-9.13333, 38.71667], rsmKey: 'geo-130' },
  { markerOffset: -5, name: "Londres", coordinates: [-0.12574, 51.50853], rsmKey: 'geo-57' },
  { markerOffset: 15, name: "Rome", coordinates: [12.51133, 41.89193], rsmKey: 'geo-79' },
  { markerOffset: -5, name: "Berlin", coordinates: [13.41053, 52.52437], rsmKey: 'geo-41' },
  { markerOffset: -5, name: "Bruxelles", coordinates: [4.34878, 50.85045], rsmKey: 'geo-12' },
  { markerOffset: -5, name: "Moscou", coordinates: [37.61556, 55.75222], rsmKey: 'geo-135' },
  { markerOffset: -5, name: "Dublin", coordinates: [-6.24889, 53.33306], rsmKey: 'geo-74' },
  { markerOffset: 15, name: "Vienne", coordinates: [16.37208, 48.20849], rsmKey: 'geo-9' },
  { markerOffset: -5, name: "Copenhague", coordinates: [12.56553, 55.67594], rsmKey: 'geo-43' },
  { markerOffset: 15, name: "Minsk", coordinates: [27.56667, 53.9], rsmKey: 'geo-19' },
  { markerOffset: -5, name: "Sofia", coordinates: [23.32415, 42.69751], rsmKey: 'geo-16' },
  { markerOffset: 15, name: "Zagreb", coordinates: [15.97798, 45.81444], rsmKey: 'geo-69' },
  { markerOffset: -5, name: "Helsinki", coordinates: [24.93545, 60.16952], rsmKey: 'geo-52' },
  { markerOffset: -5, name: "Athènes", coordinates: [23.71622, 37.97945], rsmKey: 'geo-64' },
  { markerOffset: 20, name: "Budapest", coordinates: [19.03991, 47.49801], rsmKey: 'geo-71' },
  { markerOffset: -5, name: "Reykjavik", coordinates: [-21.89541, 64.13548], rsmKey: 'geo-77' },
  { markerOffset: -5, name: "Andorre-la-vieille", coordinates: [1.52109, 42.50779] },
  { markerOffset: -5, name: "Sarajevo", coordinates: [18.35644, 43.84864], rsmKey: 'geo-18' },
  { markerOffset: -5, name: "Nicosie", coordinates: [33.3642, 35.17531], rsmKey: 'geo-39' },
  { markerOffset: 15, name: "Tallinn", coordinates: [24.75353, 59.43696], rsmKey: 'geo-50' },
  { markerOffset: -5, name: "Pristina", coordinates: [21.16688, 42.67272], rsmKey: 'geo-88' },
  { markerOffset: -5, name: "Riga", coordinates: [24.10589, 56.946], rsmKey: 'geo-98' },
  { markerOffset: -10, name: "Vilnius", coordinates: [25.2798, 54.68916], rsmKey: 'geo-96' },
  { markerOffset: -5, name: "Luxembourg", coordinates: [6.13, 49.61167] },
  { markerOffset: 20, name: "Skopje", coordinates: [21.43141, 41.99646], rsmKey: 'geo-103' },
  { markerOffset: -5, name: "Chişinău", coordinates: [28.8575, 47.00556], rsmKey: 'geo-100' },
  { markerOffset: 10, name: "Podgorica", coordinates: [19.26361, 42.44111], rsmKey: 'geo-2' },
  { markerOffset: -5, name: "Oslo", coordinates: [10.74609, 59.91273], rsmKey: 'geo-118' },
  { markerOffset: -15, name: "Amsterdam", coordinates: [4.88969, 52.37403], rsmKey: 'geo-117' },
  { markerOffset: -5, name: "Varsovie", coordinates: [21.01178, 52.22977], rsmKey: 'geo-127' },
  { markerOffset: -5, name: "Prague", coordinates: [14.42076, 50.08804], rsmKey: 'geo-40' },
  { markerOffset: -5, name: "Bucarest", coordinates: [26.10626, 44.43225], rsmKey: 'geo-134' },
  { markerOffset: -10, name: "Belgrade", coordinates: [20.46513, 44.80401], rsmKey: 'geo-147' },
  { markerOffset: -5, name: "Bratislava", coordinates: [17.10674, 48.14816], rsmKey: 'geo-149' },
  { markerOffset: -5, name: "Ljubljana", coordinates: [14.50513, 46.05108], rsmKey: 'geo-150' },
  { markerOffset: -5, name: "Berne", coordinates: [7.44744, 46.94809], rsmKey: 'geo-28' },
  { markerOffset: 15, name: "Stockholm", coordinates: [18.0649, 59.33258], rsmKey: 'geo-151' },
  { markerOffset: -5, name: "Kiev", coordinates: [30.5238, 50.45466], rsmKey: 'geo-166' },
];

const MapChart = ({ setTooltipContent }) => {
  const [hoveredCountry, setHoveredCountry] = useState(0);
  const [cityName, setCityName] = useState('');
  const [src, setSrc] = useState('')
  const { userId, userImages, setUserImages, tokenApp, setLoading } = useContext(context);
// console.log(userImages);
  const findPicture = () => {
    const picture = userImages.filter(image => image.city.country === cityName)
    setSrc(`<img src=${picture[0]?.link}/>`)
  }

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
                onMouseOver={() => {
                  setHoveredCountry(geo.rsmKey)
                  setCityName(geo.properties.NAME)
                  findPicture()
                  setTooltipContent(src);
                  console.log(src);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                  setHoveredCountry(null);
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
        {markers
          .filter(marker => marker.rsmKey === hoveredCountry)
          .map((marker) => (
            <Marker key={marker.name} coordinates={marker.coordinates}>
              <circle r={1} fill="#fff" />
              <text
                textAnchor="middle"
                y={marker.markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D", pointerEvents: 'none' }}
              >
                {marker.name}
              </text>
            </Marker>
          ))}
      </ComposableMap>
    </>
  );
};


export default memo(MapChart);
