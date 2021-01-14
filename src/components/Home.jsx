import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { API_URL } from "../env";
import CitiesList from "./CitiesList";
import { context } from "./context";
import MapChart from "./MapChart";

const Home = ({ x, y }) => {
  const [content, setContent] = useState("");
  const { userId, setUserId, setUserImages, tokenApp, setLoading, loading } = useContext(context)

  useEffect(() => {
    axios
      .get(`${API_URL}/city/visited?userId=${userId}`, {
        headers: {
          'Authorization': `Bearer ${tokenApp}`
        }
      })
      .then(res => {
        setUserImages(res.data)
      }, () => setLoading(false))
  }, [userId])

  // if(loading){
  //   return <h1>Loading</h1>
  // }
  return (
    <>
      <CitiesList x={x} y={y} />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip html={true}>{content}</ReactTooltip>
    </>
  );
};

export default Home;
