import { createSlice } from "@reduxjs/toolkit";
import { setIconHidden } from "./ManageTeamSlice";
import { ApiDetails } from "../utils/AddCustomerData";

const initialState = {
    data: [],
    ApiData: [],
    basicDetailVisibility: false,
    apiDetailsVisibility: false,
    filterVisible: false,
    iconVisible: false,
    first_name: "",
    last_name: "",
    role: "customer_admin",
    email: "",
    password: "",
}

const CustomerCardSlice = createSlice({
    name: 'CustomerCardSlice',
    initialState,
    reducers: {

        setApiData: (state, action) => {
            const { data } = action.payload;
            return {
                ...state,
                ApiData: [...data]
            }
        },

        setData: (state, action) => {
            return {
                ...state,
                data: [action.payload]
            }
        },

        setFilterVisibleCust: (state, action) => {
            return {
                ...state,
                filterVisible: true,
            }
        },

        setFilterHiddenCust: (state, action) => {
            return {
                ...state,
                filterVisible: false,
            }
        },

        setIconVisibleCust: (state, action) => {
            console.log('visible')
            return {
                ...state,
                iconVisible: true,
            }
        },

        setIconHiddenCust: (state, action) => {
            console.log('hidden')
            return {
                ...state,
                iconVisible: false,
            }
        },

        setBasicDetailVisibility: (state, action) => {
            return {
                ...state,
                basicDetailVisibility: !state.basicDetailVisibility
            }
        },

        setApiDetailVisibility: (state, action) => {
            return {
                ...state,
                apiDetailsVisibility: !state.apiDetailsVisibility,
            }
        },

        setRole: (state, action) => {
            const { type, data } = action.payload;

            if (type == "SET_EMAIL") {
                return {
                    ...state,
                    email: data,
                }
            }
            if (type == "SET_PASSWORD") {
                return {
                    ...state,
                    password: data,
                }
            }
            if (type == "SET_CUSTOMER_TYPE") {
                return {
                    ...state,
                    role: data,
                }
            }
            if (type == "SET_FIRST_NAME") {
                return {
                    ...state,
                    first_name: data,
                }
            }
            if (type == "SET_LAST_NAME") {
                return {
                    ...state,
                    last_name: data,
                }
            }

        },





    },


})


export const setApiData = CustomerCardSlice.actions.setApiData;
export const setData = CustomerCardSlice.actions.setData;
export const setRole = CustomerCardSlice.actions.setRole;
export const setIconHiddenCust = CustomerCardSlice.actions.setIconHiddenCust;
export const setFilterHiddenCust = CustomerCardSlice.actions.setFilterHiddenCust;
export const setIconVisibleCust = CustomerCardSlice.actions.setIconVisibleCust;
export const setFilterVisibleCust = CustomerCardSlice.actions.setFilterVisibleCust;
export const setApiDetailVisibility = CustomerCardSlice.actions.setApiDetailVisibility;
export const setBasicDetailVisibility = CustomerCardSlice.actions.setBasicDetailVisibility;
export default CustomerCardSlice.reducer;