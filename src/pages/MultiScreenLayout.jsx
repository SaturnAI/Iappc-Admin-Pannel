import React from 'react'
import Dashboard from './Dashboard'
import {SidebarContainer} from '../componants'
import { Outlet } from 'react-router-dom'
import Wrapper from '../styles/MultiScreenLayoutStyle'

const MultiScreenLayout = () => {
    return (
        <Wrapper>
            <div className='firstContainer'>
                <SidebarContainer />
            </div>
            <div className='secondContainer'>
                <Outlet />
            </div>
        </Wrapper>
    )
}

export default MultiScreenLayout
