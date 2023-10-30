import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Wrapper from '../styles/SidebarHeaderStyle';
import logo from '../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { setCollapse } from '../store/SidebarSlice';

const SidebarHeaderContainer = () => {
  const dispatch = useDispatch()
  const { collapse } = useSelector((state) => state.SidebarSlice)

  return (
    <Wrapper>
      <div className="TitleandButtonContainer">
        {!collapse ?
          <div className="AdminText">
            Admin
          </div>
          :
          null}
        <div className="ToggleButton" onClick={() => dispatch(setCollapse())}>
          <MenuOutlinedIcon />
        </div>
      </div>

      {!collapse
        ?
        <div className="imageBox">
          <div className="imageContainer">
            <img className="image" src={logo} alt="image" />
          </div>

          <div className="AdminNameContainer">
            <div className="greetText">
              Welcome!!
            </div>
            <div className="AdminName">
              Shubham Verma
            </div>
          </div>
        </div>
        :
        null}



    </Wrapper>
  )
}

export default SidebarHeaderContainer;
