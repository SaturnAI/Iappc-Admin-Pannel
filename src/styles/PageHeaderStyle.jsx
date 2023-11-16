import styled from "styled-components";

const Wrapper = styled.div`

   position: relative;

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

.profileIcon{
    display: flex;
    flex-direction: column;
    
}

.LogoutTab{
    display: inline-block;
    position: absolute;
    right: 0;
    margin-right: 30px;
    margin-top: 30px;
    cursor: pointer;
    background-color: ${({ darkcolor }) => darkcolor.white};
    border-radius: 20px;
    color:  ${({ darkcolor }) => darkcolor.Black};
    font-size: 13px;
    padding: 10px;
}


`

export default Wrapper;