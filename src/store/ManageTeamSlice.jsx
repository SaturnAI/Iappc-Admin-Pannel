import { createSlice, current } from "@reduxjs/toolkit";
import { mockDataTeam } from "../utils/mockData";

const initialState = {

    data: [...mockDataTeam],
    iconVisible: false,
    filterVisible: false,
    column: 'id',
    operator: 'contain',
    text: "",
    CustomerBlockVisibility : false,


}

const ManageTeamSlice = createSlice({
    name: 'ManageTeamSlice',
    initialState,
    reducers: {

        setCustomerBlockVisibility : (state, action) => {
                 return {
                    ...state,
                    CustomerBlockVisibility : !state.CustomerBlockVisibility,
                 }
        },

        setIconVisible: (state, action) => {
            return {
                ...state,
                iconVisible: true
            }
        },

        setIconHidden: (state, action) => {
            return {
                ...state,
                iconVisible: false
            }
        },

        setFilterVisible: (state, action) => {
            return {
                ...state,
                filterVisible: true,
            }
        },

        setFilterHidden: (state, action) => {
            return {
                ...state,
                filterVisible: false,
            }
        },

        setColumn: (state, action) => {
            return {
                ...state,
                column: action.payload,
            }
        },

        setOperator: (state, action) => {
            return {
                ...state,
                operator: action.payload,
            }
        },

        setText: (state, action) => {

            return {
                ...state,
                text: action.payload
            }
        },

        startFilter: (state, action) => {

            if (action.payload == '') {
                return {
                    ...state,
                    data: [...mockDataTeam]
                }
            }

            if (current(state).column == 'id' && current(state).operator == 'contain') {
                const newData = current(state).data.filter(({ id }) => String(id).includes(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'id' && current(state).operator == '=') {
                const newData = current(state).data.filter(({ id }) => id == Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'id' && current(state).operator == '<=') {
                const newData = current(state).data.filter(({ id }) => id <= Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'id' && current(state).operator == '>=') {
                const newData = current(state).data.filter(({ id }) => id >= Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'id' && current(state).operator == '>') {
                const newData = current(state).data.filter(({ id }) => id > Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'id' && current(state).operator == '<') {
                const newData = current(state).data.filter(({ id }) => id < Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'id' && current(state).operator == '!=') {
                const newData = current(state).data.filter(({ id }) => id != Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'name' && current(state).operator == '=') {
                const newData = current(state).data.filter(({ name }) => name == action.payload)

                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'name' && current(state).operator == '<=') {
                const newData = current(state).data.filter(({ name }) => name.length <= Number(action.payload))

                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'name' && current(state).operator == '>=') {
                const newData = current(state).data.filter(({ name }) => name.length >= Number(action.payload))

                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'name' && current(state).operator == '>') {
                const newData = current(state).data.filter(({ name }) => name.length > Number(action.payload))

                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'name' && current(state).operator == '<') {
                const newData = current(state).data.filter(({ name }) => name.length < Number(action.payload))

                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'name' && current(state).operator == 'contain') {
                const newData = current(state).data.filter(({ name }) => name.includes(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'name' && current(state).operator == '!=') {
                const newData = current(state).data.filter(({ name }) => name != (action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'age' && current(state).operator == 'contain') {
                const newData = current(state).data.filter(({ age }) => String(age).includes(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'age' && current(state).operator == '=') {
                const newData = current(state).data.filter(({ age }) => age == Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'age' && current(state).operator == '<=') {
                const newData = current(state).data.filter(({ age }) => age <= Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'age' && current(state).operator == '>=') {
                const newData = current(state).data.filter(({ age }) => age >= Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'age' && current(state).operator == '>') {
                const newData = current(state).data.filter(({ age }) => age > Number(action.payload))
                return {
                    ...state,
                    data: newData(newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'age' && current(state).operator == '<') {
                const newData = current(state).data.filter(({ age }) => age < Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'age' && current(state).operator == '!=') {
                const newData = current(state).data.filter(({ age }) => age != Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'number' && current(state).operator == 'contain') {
                const newData = current(state).data.filter(({ phone }) => String(phone).includes(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'number' && current(state).operator == '=') {
                const newData = current(state).data.filter(({ phone }) => phone == action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'number' && current(state).operator == '<') {
                const newData = current(state).data.filter(({ phone }) => phone < action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'number' && current(state).operator == '>') {
                const newData = current(state).data.filter(({ phone }) => phone > action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'number' && current(state).operator == '>=') {
                const newData = current(state).data.filter(({ phone }) => phone >= action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }


            if (current(state).column == 'number' && current(state).operator == '<=') {
                const newData = current(state).data.filter(({ phone }) => phone <= action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'number' && current(state).operator == '!=') {
                const newData = current(state).data.filter(({ phone }) => phone != action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'email' && current(state).operator == 'contain') {
                const newData = current(state).data.filter(({ email }) => email.includes(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'email' && current(state).operator == '=') {
                const newData = current(state).data.filter(({ email }) => email == action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'email' && current(state).operator == '>') {
                const newData = current(state).data.filter(({ email }) => email.length > Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'email' && current(state).operator == '<') {
                const newData = current(state).data.filter(({ email }) => email.length < Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'email' && current(state).operator == '>=') {
                const newData = current(state).data.filter(({ email }) => email.length >= Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'email' && current(state).operator == '<=') {
                const newData = current(state).data.filter(({ email }) => email.length <= Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'email' && current(state).operator == '!=') {
                const newData = current(state).data.filter(({ email }) => email.length != Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'accesslevel' && current(state).operator == 'contain') {
                const newData = current(state).data.filter(({ access }) => access.includes(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            }

            if (current(state).column == 'accesslevel' && current(state).operator == '=') {
                const newData = current(state).data.filter(({ access }) => access == action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            } 
            
            if (current(state).column == 'accesslevel' && current(state).operator == '<') {
                const newData = current(state).data.filter(({ access }) => access.length < Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            } 

            if (current(state).column == 'accesslevel' && current(state).operator == '>') {
                const newData = current(state).data.filter(({ access }) => access.length > Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            } 

            if (current(state).column == 'accesslevel' && current(state).operator == '>=') {
                const newData = current(state).data.filter(({ access }) => access.length >= Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            } 

            if (current(state).column == 'accesslevel' && current(state).operator == '<=') {
                const newData = current(state).data.filter(({ access }) => access.length <= Number(action.payload))
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            } 

            if (current(state).column == 'accesslevel' && current(state).operator == '!=') {
                const newData = current(state).data.filter(({ access }) => access != action.payload)
                return {
                    ...state,
                    data: (newData.length > 0) ? newData : current(state).data,
                }
            } 




        },


    }
})

export const setCustomerBlockVisibility = ManageTeamSlice.actions.setCustomerBlockVisibility;
export const setText = ManageTeamSlice.actions.setText;
export const startFilter = ManageTeamSlice.actions.startFilter;
export const setOperator = ManageTeamSlice.actions.setOperator;
export const setColumn = ManageTeamSlice.actions.setColumn;
export const setFilterHidden = ManageTeamSlice.actions.setFilterHidden;
export const setFilterVisible = ManageTeamSlice.actions.setFilterVisible;
export const setIconHidden = ManageTeamSlice.actions.setIconHidden;
export const setIconVisible = ManageTeamSlice.actions.setIconVisible;
export default ManageTeamSlice.reducer;