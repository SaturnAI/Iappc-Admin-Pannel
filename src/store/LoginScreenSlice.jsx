import { createSlice } from "@reduxjs/toolkit";



const LoginScreenSlice = createSlice({
        name : 'LoginScreenSlice',
        initialState : {
           
            isAuthenticated : true,
            userName : '',
            warning : false,
            
        },

        reducers: {

            setUser : (state, action) => {
                const {data, username} = action.payload;
                const {success} = data;
                if(success){
                    return {
                       ...state,
                       isAuthenticated : true,
                       userName : username,
                    }
                }else{
                    return {
                        ...state,
                        warning : true,
                    }
                }
            },

            setLogout: (state, action) => {
                return {
                    ...state,
                    isAuthenticated : false,
                }
            },

            setLogin : (state, action) => {
                const name = action.payload;
    
                return {
                    ...state,
                    isAuthenticated : true,
                    userName : name,
                }
            },






            
             
        },       
})


export const setLogin = LoginScreenSlice.actions.setLogin;
export const setLogout = LoginScreenSlice.actions.setLogout;
export const setUser = LoginScreenSlice.actions.setUser;
export default LoginScreenSlice.reducer;