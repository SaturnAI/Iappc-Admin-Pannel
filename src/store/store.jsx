import {configureStore} from '@reduxjs/toolkit'
import DashboardSlice from './DashboardSlice'
import SidebarSlice from './SidebarSlice'
import ManageTeamSlice from './ManageTeamSlice'
import VendorCardSlice from './VendorCardSlice'
import CustomerCardSlice from './CustomerCardSlice'
import LoginScreenSlice from './LoginScreenSlice'
import AddApiSlice from './AddApiSlice'

export const store = configureStore({
    reducer : {
        DashboardSlice,
        SidebarSlice,
        ManageTeamSlice,
        VendorCardSlice,
        CustomerCardSlice,
        LoginScreenSlice,
        AddApiSlice,
    }
})