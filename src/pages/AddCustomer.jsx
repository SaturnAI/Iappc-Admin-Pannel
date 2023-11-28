import React from 'react'

// Styles
import Wrapper from '../styles/AddCustomerStyle'

// Components
import { ApiTable, FormBlock, PageHeader, RibbonsCustomer } from '../componants'

// Colors
import { color, darkColors } from '../assets/colors'
import { ApiDetails, BasicDetails } from '../utils/AddCustomerData'
import { useSelector } from 'react-redux'
import { setApiDetailVisibility, setBasicDetailVisibility } from '../store/CustomerCardSlice'

const AddCustomer = () => {

  const { basicDetailVisibility, apiDetailsVisibility } = useSelector((state) => state.CustomerCardSlice)
  const { iconVisible, filterVisible, data} = useSelector((state) => state.CustomerCardSlice)
  return (
    <Wrapper color={color} darkcolor={darkColors}>
      <PageHeader title={'Customer Details'} subtitle={'Add Customers to you Organization'} />

      <RibbonsCustomer />

      <FormBlock title={'Basic Details'} data={BasicDetails} visibility={basicDetailVisibility} setvisibility={setBasicDetailVisibility} />
      
      <ApiTable Userdata={data} iconVisible={iconVisible} filterVisible={filterVisible} />

    </Wrapper>
  )
}

export default AddCustomer
