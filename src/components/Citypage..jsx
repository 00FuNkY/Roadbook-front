import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { images } from '../assets/cities_images';
import styled from "styled-components";

const CityPage = () => {
  const { id } = useParams()
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); 
  }, [])

  return (
    <StyledScrollContainer>
      <h1>AMSTERDAM</h1>
   {images.map((image, i) => {
     let translate = '';
     i % 2 === 0 ? translate = '+' : translate = '-';
     return <img 
     src={image} 
     alt="city-images"
     style={{ transform: `translate(${translate}200px, ${offsetY * 0.8}px)`}}
     />
   })}
  </StyledScrollContainer>
  );
}

const StyledScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 200vh;
  img{
    height: auto;
    max-width: 100%; 
  }
  h1{
    font-size: 10vh;
    letter-spacing: 5vw;
    max-width: 100vw;
    font-weight: 100;
  }
`

export default CityPage;