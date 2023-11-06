import { createSlice } from "@reduxjs/toolkit";
import { setIconHidden } from "./ManageTeamSlice";
import { ApiDetails } from "../utils/AddCustomerData";

const initialState = {
        data : [...ApiDetails],
        basicDetailVisibility : false,
        apiDetailsVisibility : false,
        filterVisible : false,
        iconVisible : false,

}

export const CustomerCardSlice = createSlice({
    name: 'CustomerCardSlice',
    initialState,
    reducers : {

        setFilterVisibleCust : (state, action) => {
            return {
             ...state,
             filterVisible : true,
            }
        },

        setFilterHiddenCust : (state, action) => {
            return {
                ...state,
                filterVisible : false,
            }
        },

        setIconVisibleCust : (state, action) => {
            console.log('visible')
          return{
            ...state,
            iconVisible : true,
          }
        },

        setIconHiddenCust : (state, action) => {
            console.log('hidden')
              return {
                ...state,
                iconVisible : false,
              }
        },

        setBasicDetailVisibility : (state, action) =>{
            return {
                ...state,
                basicDetailVisibility : !state.basicDetailVisibility
            }
        },

        setApiDetailVisibility : (state, action) =>{
            return {
                ...state,
                apiDetailsVisibility : !state.apiDetailsVisibility,
            }
        }
    }
})


export const setIconHiddenCust = CustomerCardSlice.actions.setIconHiddenCust;
export const setFilterHiddenCust = CustomerCardSlice.actions.setFilterHiddenCust;
export const setIconVisibleCust = CustomerCardSlice.actions.setIconVisibleCust;
export const setFilterVisibleCust = CustomerCardSlice.actions.setFilterVisibleCust;
export const setApiDetailVisibility = CustomerCardSlice.actions.setApiDetailVisibility;
export const setBasicDetailVisibility = CustomerCardSlice.actions.setBasicDetailVisibility;
export default CustomerCardSlice.reducer;