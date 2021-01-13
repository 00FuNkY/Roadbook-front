import { useRef, useState } from "react";
import styled from "styled-components";
import { data } from '../assets/cities_images'

const CitiesList = () => {
  const cityName = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(null)

  const mouseEnterHandler = (i) => {
    setIsHovered(true)
    setIndex(i)
  }
  const mouseLeaveHandler = () => {
    setIsHovered(false)
    setIndex(-1)
  }

  return (
    <StyledContainer>
    <StyledList> 
    {data.map((city, i) => {
      return <h1 
      onMouseEnter={() => mouseEnterHandler(i)}
      onMouseLeave={mouseLeaveHandler}
      className={isHovered ? 'isHovered' : ''}
      ref={cityName}
      key={i}
      >{city.name}</h1>
    })}
    </ StyledList>
    <StyledImage src={data[index]?.url}/>
    </StyledContainer>
   );
}

const StyledList = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  mix-blend-mode: difference;
  h1{
    font-size: 5vh;
    font-weight: 100;
    width: 50vw;
    opacity: 0.5;
    transition: .35s;
    &:hover{
      opacity: 1;
    }
  }
  .isHovered{
    cursor: alias;
    opacity: 0.1;
  }
`

const StyledImage = styled.img`

`

const StyledContainer = styled.div`
  display: flex;
`
 
export default CitiesList;