import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    generalVisibility : false,
    addressVisibility : false,
    invoiceVisibility : false,
    paymentVisibility : false,
    TaxVisibility : false,

}

const VendorCardSlice  = createSlice({
      name: 'VendorCardSlice',
      initialState,
      reducers:{
            setVisibility: (state, action) => {
                return{
                    ...state,
                    generalVisibility : !state.generalVisibility,
                }
            },

            setAddressVisibility : (state, action)=>{
                return{
                   ...state,
                   addressVisibility : !state.addressVisibility,
                }
            },

            setInvoiceVisibility : (state, action)=>{
                return{
                    ...state,
                    invoiceVisibility : !state.invoiceVisibility,
                }
            },

            setPaymentVisibility : (state, action)=>{
                return{
                    ...state,
                    paymentVisibility : !state.paymentVisibility,
                }
            },

            setTaxVisibility : (state, action)=>{
                return{
                    ...state,
                    TaxVisibility: !state.TaxVisibility
                }
            }
      }
})


export const setTaxVisibility = VendorCardSlice.actions.setTaxVisibility;
export const setPaymentVisibility = VendorCardSlice.actions.setPaymentVisibility
export const setInvoiceVisibility = VendorCardSlice.actions.setInvoiceVisibility
export const setAddressVisibility = VendorCardSlice.actions.setAddressVisibility
export const setVisibility = VendorCardSlice.actions.setVisibility;
export default VendorCardSlice.reducer;