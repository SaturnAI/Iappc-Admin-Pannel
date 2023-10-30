import {configureStore} from '@reduxjs/toolkit'
import DashboardSlice from './DashboardSlice'
import SidebarSlice from './SidebarSlice'

export const store = configureStore({
    reducer : {
        DashboardSlice,
        SidebarSlice,
    }
})