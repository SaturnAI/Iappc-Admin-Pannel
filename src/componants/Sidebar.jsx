import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { color } from '../assets/colors';
import logo from '../assets/logo.png';
import Wrapper from '../styles/SidebarStyle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';

const SidebarContainer = () => {

  const [collapse, setCollapse] = useState(true)
  
  return (
    <Wrapper color={color} >

      <Sidebar rootStyles={{
        [`.${sidebarClasses.container}`]: {
          height: '100vh',
          backgroundColor: color.lightBlue2,

        },


        border: `1px solid ${color.lightBlue2}`
      }}

        onMouseOver={() => setCollapse(false)}
        onMouseOut={() => setCollapse(true)}

        collapsed={collapse} >

        <Menu
        
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },

              "&:hover": {
                backgroundColor: color.white,
                color: color.primary,
                borderRadius: "8px !important",

              },
            },
          }}


        >



          <div className='image'>
            <img src={logo} alt="logo" />
            {!collapse ? <div className='CompanyName'>Innovative Application Consultants</div> : null}
          </div>

          <div className='line' />

          <MenuItem rootStyles={{ color: color.white }} icon={<HomeRoundedIcon />} component={<Link to={'/dashboard'}  />} > Dashboard</MenuItem>

          <MenuItem rootStyles={{ color: color.white }} icon={<Groups2RoundedIcon />} component={<Link to={'/dashboard/clients'} />}> Clients </MenuItem>
          <MenuItem rootStyles={{ color: color.white }} icon={<GroupAddSharpIcon />} >Add Client</MenuItem>



        </Menu>

        {!collapse ?
          <div className='copyright'>
            <div className='copyrightInside'>
              <CopyrightRoundedIcon fontSize='small' /><span>IAPPC</span>
            </div>
            <div>All Rights Reserved {new Date().getFullYear()}</div>
          </div>
          :
          null}


      </Sidebar>

    </Wrapper>
  )
}

export default SidebarContainer
