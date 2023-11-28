import styled from "styled-components";

const Wrapper = styled.div`

  height: 100vh;
  background: linear-gradient(to bottom, ${({ darkcolor }) => darkcolor.BlackGradTop} 0%, ${({ darkcolor }) => darkcolor.BlueSecondry} 100%);
  background-color: ${({ darkcolor }) => darkcolor.BlueSecondry};
  color: ${({ darkcolor }) => darkcolor.white}; 
  
  overflow-y: auto;
  
.StatsCardContainer{
   display: flex;
   justify-content: space-evenly;
   width: 100%;

}

@media (max-width: 768px) {
     
.StatsCardContainer{
  display: grid;
  grid-template-columns: repeat(1, 250px);
  grid-gap: 2rem;
} 


}

`

export default Wrapper;