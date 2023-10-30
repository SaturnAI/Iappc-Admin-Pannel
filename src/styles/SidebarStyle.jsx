import styled from "styled-components";

const Wrapper = styled.div`

  height: 100vh;
  .pro-sidebar-inner{
      background: ${({darkcolor})=>darkcolor.BlueSecondry};
  }

.pro-menu-item.active{
    color: ${({color})=>color.Blue} !important;
 }  

.pro-menu-item :hover{
  color: ${({color})=>color.Blue} !important;
} 

.ProsidebarHeaderContainer{
    border: 0 !important;

}

.ProsidebarFooterContainer{
  border: 0 !important;
}

.DataText{
   width: 100%;
   height: 1rem;
   font-size: 13px;
   margin-left: 1rem;
   margin-top: 1rem;
   margin-bottom: 1rem;
}

.itemContainer{
  margin-left : 1rem;
}


.MenuItems{
  font-size: 13px !important; 
  color: ${({ color }) => color.white};
}


`

export default Wrapper