import styled from "styled-components";

const Wrapper = styled.div`


select{
    width: 150px;
    background-color: ${({darkcolor})=>darkcolor.Black};
    color: ${({darkcolor})=>darkcolor.white};
    font-weight: 200;
    z-index: 100;  
    border: none;
    height: 35px;
    text-align: center;
}

option{
    background: rgba(0,0,0,0.5);
    font-weight: 200;
    font-size: 14px;
}

select:focus{
    border: none;
    outline: none;
}

`

export default Wrapper;