import styled from "styled-components";

const CitiesList = () => {
  const cities = [
    'AMSTERDAM',
    'ANDORRE-LA-VIEILLE',
    'ATHENES',
    'BELGRADE', 
    'BERLIN'
  ]

  const mouseEnterHandler = () => {
    console.log('hey');
  }

  return (
    <StyledList> 
    {cities.map((city, i) => {
      return <h1 onMouseEnter={mouseEnterHandler}>{city}</h1>
    })}
    </ StyledList>
   );
}

const StyledList = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1{
    font-size: 5vh;
    font-weight: 100;
  }
`
 
export default CitiesList;