import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   collapse: true,
   selected: 'Dashboard',
}

const SidebarSlice = createSlice({
   name: 'SidebarSlice',
   initialState,
   reducers: {

      setCollapse: (state, action) => {
         return {
            ...state,
            collapse: !state.collapse
         }
      },

      setSelected: (state, action) => {
         return {
            ...state,
            selected: action.payload
         }
      }
   }
});

export const setSelected = SidebarSlice.actions.setSelected;
export const setCollapse = SidebarSlice.actions.setCollapse;
export default SidebarSlice.reducer;