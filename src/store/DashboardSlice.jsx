import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logoutCard: false
}

export const DashboardSlice = createSlice({
    name: 'DashboardSlice',
    initialState,

    reducers: {

        setLogoutCard:(state, action)=> {
           
            return {
                ...state,
                logoutCard: !state.logoutCard,
            }
        }

    }


})


export const setLogoutCard = DashboardSlice.actions.setLogoutCard;
export default DashboardSlice.reducer
