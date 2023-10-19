import styled from "styled-components";

const Wrapper = styled.div`
 
 border-bottom: 1px solid #ccc;
 box-shadow: 1px 1px 5px 0px #ccc; 

.searchContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 20px;
}

input{
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input[type='text']:focus{
    outline: none;
    border: 2px solid ${({ color }) => color.Gray};
}

.searchIcon{
    height: 2.5rem;
    margin-right: 10px;
    padding: 8px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${({ color }) => color.primary};
    color: ${({ color }) => color.white};
}

.headerContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
   
  }

.searchContainer{
    flex: 1;
}

.profileIcon{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 50px;
    background-color: white;
    cursor: pointer;
    margin-right: 20px ;
    padding: 10px;
    border-radius: 1rem;
    background-color: ${({ color }) => color.lightBlue};
    
}

.usernameContainer{
   font-size: .8rem;
    width: 4rem;
    margin-right: 10px;
}

.profileContainer{
    display: flex;
    flex-direction: column;
    justify-content: 'center';
    align-items: center;
}

.profileDetailCard{
    margin-top: 3.3rem;
    position: absolute;
    width: 8rem;
    background-color: ${({ color }) => color.white};
    box-shadow: 1px 1px 5px 0px #ccc; 
    padding: 5px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
}

`

export default Wrapper;