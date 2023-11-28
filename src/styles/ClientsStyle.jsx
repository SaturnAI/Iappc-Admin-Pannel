import styled from "styled-components";

const Wrapper = styled.div`

height: 100vh;
  background: linear-gradient(to bottom, ${({ darkcolor }) => darkcolor.BlackGradTop} 0%, ${({ darkcolor }) => darkcolor.BlueSecondry} 100%);
  background-color: ${({ darkcolor }) => darkcolor.BlueSecondry};
  color: ${({ darkcolor }) => darkcolor.white}; 
  

`

export default Wrapper;