import styled from "styled-components";

const Wrapper = styled.div`

 align-self: center;
   align-items: center;
   width: 90%;
   display: inline-grid;
   grid-auto-flow: row;
   grid-template-columns: 1fr 1fr 1fr 1fr; 
   grid-column-gap: .1rem;
   

.container {
    margin-left: 20px;
    margin-right: 20px;
}

.label{
    font-weight: 400;
    font-size: 13px;
}

input {
    width: 230px;
    height: 25px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
   
    font-size: 13px;
}


`
export default Wrapper;