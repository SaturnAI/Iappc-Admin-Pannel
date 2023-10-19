import { styled } from 'styled-components'

const Wrapper = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    
    
h1{
    font-weight: 800;
    font-size: 1.4rem;
    padding: 1rem;
    color: ${({ color }) => color.primary};
    background-color: ${({ color }) => color.Ivory};
    border-radius: 20px;
}

.image{
    width: 28rem;
    height: 24rem;
    object-fit: contain;  
}

.title{
   width: 28rem;
   text-align: center;     
}

.LoginFormContainer{
    /* margin-left: -100px; */
}

`

export default Wrapper