import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { context } from "./context";
import { API_URL } from "../env";


const CityPage = () => {
  const { id } = useParams();
  const [offsetY, setOffsetY] = useState(0);
  const [city, setCity] = useState({});
  const [cityImages, setCityImages] = useState([]);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const { setTokenApp, tokenApp, userImages } = useContext(context);

  useEffect(() => {
    axios
      .get(`${API_URL}/city/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenApp}`,
        },
      })
      .then((res) => setCity(res.data));

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCityImages(city.image_id);
  }, [city]);

  useEffect(() => {
    console.log(cityImages);
  }, [cityImages]);

  if (!userImages) {
    return <h1>Loading</h1>;
  } else {
    return (
      <StyledScrollContainer>
        <h1>{city.name}</h1>
        {userImages
        .filter(image => image.city.name === city.name )
        .map((image, i) => {
          let translate = "";
          i % 2 === 0 ? (translate = "+") : (translate = "-");
          return (
            <img
              src={image.link}
              alt="city-images"
              style={{
                transform: `translate(${translate}200px, ${offsetY * 0.8}px)`,
              }}
              key={i}
            />
          );
        })}
      </StyledScrollContainer>
    );
  }
};

const StyledScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 200vh;
  img {
    max-height: 400px;
    max-width: 100%;
  }
  h1 {
    font-size: 9em;
    letter-spacing: 5vw;
    max-width: 100vw;
    font-weight: 100;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
    img {
      transform: none !important;
    }
  }
`;

export default CityPage;
