import styled from "styled-components";

const Wrapper = styled.div`

overflow-x : auto;
overflow-y: auto;

.inputFields{
   align-self: center;
   align-items: center;
   margin-left: 40px;
   width: 90%;
   display: inline-grid;
   grid-auto-flow: row;
   grid-template-columns: 1fr 1fr 1fr 1fr; 
   grid-column-gap: 2rem;
   
   }

   button{
     height: 30px;
     background-color: ${({ darkcolors }) => darkcolors.Blue};
     box-shadow: none;
     border: none;
     color: ${({ darkcolors }) => darkcolors.white};
     border-radius: 10px;
     margin-bottom: 15px;
   }

.dropdownContainer{
    display: flex;
    justify-content: space-between;
    padding : 10px;
    border-bottom: 1px solid ${({ darkcolors }) => darkcolors.Gray};
} 

.title{
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
}

.seemorebutton{
    font-size: 12px;
    cursor: pointer;
    font-weight: 100;
}

.visible{
    visibility: visible;
    
}

.hidden{
    visibility: hidden;
    
}

@media (max-width: 768px) {

    overflow-x: hidden;

    .inputFields{
   align-self: center;
   align-items: center;
   margin-left: 20px;
   width: 100vw;
   display: inline-grid;
   grid-auto-flow: row;
   grid-template-columns: 1fr 1fr ; 
   grid-column-gap: 1rem;
   }
}

`

export default Wrapper;