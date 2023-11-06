import styled from "styled-components";

const Wrapper = styled.div`


.HeaderContainer{
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
}
.PageTitleContainer{
    display: flex;
    flex-direction:column;
    justify-content: center;
}

.PageTitle{
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
}

.PageSubtitle{
     font-size: 16px;
     align-self: center;
     font-weight: 300;
   } 

.Buttons{
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    width: 13rem;
}

.Buttons :hover{
    color: ${({ darkcolor }) => darkcolor.Blue}
}


`

export default Wrapper;