import React from 'react'

// Styles
import Wrapper from '../styles/AddVendorStyle'

// Component 
import { FormBlock, PageHeader, Ribbons } from '../componants'

// colors
import { color, darkColors } from '../assets/colors'
import { TaxInformation, address, general, invoicing, payment } from '../utils/formData'

import { useSelector } from 'react-redux'
import { setAddressVisibility, setInvoiceVisibility, setPaymentVisibility, setTaxVisibility, setVisibility } from '../store/VendorCardSlice'

const AddVendor = () => {

  const { generalVisibility, addressVisibility, invoiceVisibility, paymentVisibility, TaxVisibility } = useSelector((state) => state.VendorCardSlice)
  return (
    <Wrapper color={color} darkcolor={darkColors}>
      <PageHeader title={'Add Vendor'} subtitle={'Add Vendor to your Organization'} />

       <Ribbons />

      <FormBlock title={'General'} data={general} visibility={generalVisibility} setvisibility={setVisibility}  />
      <FormBlock title={'Address'} data={address} visibility={addressVisibility} setvisibility={setAddressVisibility} />
      <FormBlock title={'invoicing'} data={invoicing} visibility={invoiceVisibility} setvisibility={setInvoiceVisibility} />
      <FormBlock title={'Payment'} data={payment} visibility={paymentVisibility} setvisibility={setPaymentVisibility} />
      <FormBlock title={'Tax Information'} data={TaxInformation} visibility={TaxVisibility} setvisibility={setTaxVisibility} />

    </Wrapper>
  )
}

export default AddVendor
