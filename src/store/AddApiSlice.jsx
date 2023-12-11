import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    DestinationName: '',
    AuthUrl: '',
    DataUrl: '',
    Environment: '',
    LoginKey: '',
    ClientID: '',
    ClientSecret: '',

}

const AddApiSlice = createSlice({
    name: 'AddApiSlice',
    initialState,

    reducers: {
        
        AddNewApiData : (state, action) => {
            const {type , data} = action.payload;

            if(type == 'DestinationName'){
                return {
                    ...state,
                    DestinationName : data,
                }
            }
            if(type == 'AuthUrl'){
                return {
                    ...state,
                    AuthUrl : data,
                }
            }
            if(type == 'DataUrl'){
                return {
                    ...state,
                    DataUrl : data,
                }
            }
            if(type == 'Environment'){
                return {
                    ...state,
                    Environment : data,
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
        }

    }
})


export const AddNewApiData = AddApiSlice.actions.AddNewApiData;
export default AddApiSlice.reducer;