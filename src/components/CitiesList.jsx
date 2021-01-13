import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { data } from '../assets/cities_images'

const CitiesList = ({ x, y }) => {
  const history = useHistory()
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
            onClick={() => history.push(`/${i}`)}
          >{city.name}</h1>
        })}
      </ StyledList>
      <StyledImageContainer>
        <StyledImage
          src={data[index]?.url}
          style={{ transform: `translate(${x}px, ${y}px)` }}
        />
      </StyledImageContainer>
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
    cursor: none;
    opacity: 0.1;
  }
`

const StyledImage = styled.img`
  position: absolute;
  object-fit: contain;
  pointer-events: none;
`

const StyledImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

const StyledContainer = styled.div`
  display: flex;
`

export default CitiesList;