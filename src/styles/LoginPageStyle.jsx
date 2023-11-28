import styled from "styled-components";

const Wrapper = styled.div`



  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 30rem;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 0px black; 

.warning{
    align-self: center;
    margin-top: -50px;
    font-size: 13px;
    color: ${({darkcolor})=>darkcolor.Red};

}

img{
     width: 8rem;
     height: 8rem;
  }

.imageContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.formContainer{
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    width: 100%;
}



button{
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ color }) => color.primary};
    background-color: ${({ color }) => color.primary} ;
    border-radius: 10px;
    margin-top: 10px;
    font-size: large;
    color: ${({ color }) => color.white} ;
    font-weight: medium;
    cursor: pointer;
}

button:hover{
    background-color: ${({ color }) => color.Secondry} ;
}

.orLineContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
}

.line{
    width: 100%;
    border-radius: 20px;
    height: 1px;
    border: 1px solid ${({ color }) => color.primary};
    margin-top: 20px;
}

.orText{
    color: ${({ color }) => color.primary};
    font-weight: medium;
    font-size: medium;
    background-color: ${({ color }) => color.white};
    width: 2rem;
    height: 1.5rem;
    text-align: center;
    margin-top: -12px;
    font-weight: bold;
}

.ForgetButton{
    width: 100%;
    text-align: center;
    color: ${({ color }) => color.primary};
   font-weight: 500;
   cursor: pointer;
    
}

.labelText{
    font-size: 13px;
}


`

export default Wrapper