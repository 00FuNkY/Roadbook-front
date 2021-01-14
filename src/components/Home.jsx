import { useState } from "react";
import ReactTooltip from "react-tooltip";
import CitiesList from "./CitiesList";
import MapChart from "./MapChart";

const Home = ({ x, y }) => {
  const [content, setContent] = useState("");
  

  return (
    <>
      <CitiesList x={x} y={y} />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip html={true} place='top'>{content}</ReactTooltip>
    </> 
  );
};

export default Home;
