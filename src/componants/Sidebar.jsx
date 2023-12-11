import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

import { SidebarFooterContainer, SidebarHeaderContainer } from '../componants'
import { darkColors, color } from '../assets/colors.jsx'

import Wrapper from '../styles/SidebarStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../store/SidebarSlice';


const Sidebar = () => {
  const dispatch = useDispatch();
  const { collapse, selected } = useSelector((state) => state.SidebarSlice)


  const Item = ({ title, to, icon }) => {

    return (
      <MenuItem
        active={selected === title}
        className='MenuItems'
        icon={icon}
        onClick={() => dispatch(setSelected(title))}
      >
        {title} <Link to={to} />
      </MenuItem>

    )
  }

  return (
    <Wrapper color={color} darkcolor={darkColors} >
      <ProSidebar collapsed={collapse} >
        <SidebarHeader className='ProsidebarHeaderContainer' >
          <SidebarHeaderContainer />
        </SidebarHeader>

        <SidebarContent >

          <Menu>
            <Item title={'Dashboard'} to={'/'} icon={<HomeOutlinedIcon fontSize='small' />} />

            <div className="DataText" >
              Data
            </div>

            <Item title={'Manage Team'} to={'clients'} icon={<GroupOutlinedIcon fontSize='small' />} />
            <Item title={'Contact Information'} to={'contactinfo'} icon={<ContactsOutlinedIcon fontSize='small' />} />


            <div className="DataText" >
              Forms
            </div>

            
            <Item title={'Add Vendor'} to={'addvendor'} icon={<PersonAddAltOutlinedIcon fontSize='small' />} />
          </Menu>

        </SidebarContent>

        {!collapse
          ?
          <SidebarFooter className='ProsidebarFooterContainer'>
            <SidebarFooterContainer />
          </SidebarFooter>
          :
          null}
      </ProSidebar>
    </Wrapper>
  )
}

export default Sidebar
