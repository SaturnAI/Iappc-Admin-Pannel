import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    ApiName : 'salesledby',
    Type : '',
    Environment: 'uat',
    LoginKey: '',
    ClientID: '',
    ClientSecret: '',
    Scope : '',
    DataUrl: '',

}

const AddApiSlice = createSlice({
    name: 'AddApiSlice',
    initialState,

    reducers: {
        
        AddNewApiData : (state, action) => {
            const {type , data} = action.payload;

            
            if(type == 'Type'){
                return {
                    ...state,
                    Type : data,
                }
            }
           
            if(type == 'LoginKey'){
                return {
                    ...state,
                    LoginKey : data,
                }
            }
            if(type == 'ClientID'){
                return {
                    ...state,
                    ClientID : data,
                }
            }
           
            if(type == 'ClientSecret'){
                return {
                    ...state,
                    ClientSecret : data,
                }
            }
            if(type == 'Scope'){
                return {
                    ...state,
                    Scope : data,
                }
            }
            if(type == 'DataURL'){
                return {
                    ...state,
                    DataUrl : data,
                }
            }
        },

        setApiName : (state, action) => {
           return {
            ...state,
            ApiName : action.payload,
           }
        },

        setEnvironments : (state, action) => {
            return {
                ...state,
                Environment: action.payload,
            }
        }

    }
})


export const setApiName = AddApiSlice.actions.setApiName
export const setEnvironments = AddApiSlice.actions.setEnvironments
export const AddNewApiData = AddApiSlice.actions.AddNewApiData;
export default AddApiSlice.reducer;