import styled from "styled-components";

const Wrapper = styled.div`

background-color: ${({ darkcolor }) => darkcolor.DarkBlue};

width:  15rem;
     display: flex;
     justify-content: space-between;
     padding: 1.5rem;
     height: 9rem;
     border-radius: 20px;

.leftItems{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.data{
    font-weight: 500;
    font-size: 20px;
}

.text{
   font-weight: 200;
   font-size: 14px;
}

.rightItem{  
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.percentage{
    font-weight: 200;
    font-size: 14px;
}

.progressBar{
    width : 4.5rem;
    height : 4.5rem;
}


/* Media Queries */

@media (max-width: 768px) {
    width:  14rem;
     display: flex;
     justify-content: space-between;
     height: 9rem;
     border-radius: 20px;
}


`

export default Wrapper;