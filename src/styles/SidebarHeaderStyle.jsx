import styled from "styled-components";

const Wrapper = styled.div`

.TitleandButtonContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
    height: 4rem;
}

.AdminText{
    text-transform: uppercase;
    cursor: pointer;
}

.ToggleButton{
    cursor:  pointer;
}

.imageBox{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.imageContainer{
     object-fit: contain;
     background-color: white;
     align-self: center;
     width: 5rem;
     height: 5rem;
     border-radius: 50%;
     
}

.image{
    height: 5rem;
    width: 5rem;   
}


.AdminNameContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.AdminName{
    font-weight: bold;
    font-size: 1.3rem;

}

`
export default Wrapper;