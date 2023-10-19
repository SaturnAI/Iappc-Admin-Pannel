import styled from "styled-components";

const Wrapper = styled.div`


.image{
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color.white};
}

img{
    width: 5rem;
    height: 5rem;
}

.line{
    width: 98%;
    border: 1px solid #ccc;
    margin-bottom: 2px;
    align-self: center;
    margin-left: 2px;
}

.copyright{
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color.Gray};
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  align-self: center;
  right: 35%;
  font-size: .6rem;
  flex-direction: column;
}

.copyrightInside{
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color.Gray};
  margin-bottom: 2px;
}


`

export default Wrapper