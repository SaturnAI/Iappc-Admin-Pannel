import styled from "styled-components";

const Wrapper = styled.div`

.container{
    display: flex;
    justify-content: flex-start;
    position: absolute;
    border-bottom: 1px solid ${({darkcolor})=>darkcolor.white};
}

.textField{
    width: 150px;
}

input{
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    border-radius: none;
    outline: none;
    border: none;
    color: ${({darkcolor})=>darkcolor.white};
    padding: 10px;
    font-size: 14px;
}


`
export default Wrapper;