import styled from "styled-components";

const Wrapper = styled.div`



textarea, input{ outline: none; }

.label{
    font-weight: 400;
    font-size: 13px;
}

input, textarea{
    width: 230px;
    height: 25px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 13px;
}

.inputWarning{
    border: 2px solid red;
}

.important{
    color : ${({darkcolor})=>darkcolor.Red}
}
  
`

export default Wrapper;