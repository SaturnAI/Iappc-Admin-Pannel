import React from 'react'

// Styles
import Wrapper from '../styles/AddCustomerStyle'

// Components
import { ApiTable, FormBlockAddAPI, PageHeader, RibbonsApi } from '../componants'

// Colors
import { color, darkColors } from '../assets/colors'
import { useSelector } from 'react-redux'
import { setApiDetailVisibility, setBasicDetailVisibility } from '../store/CustomerCardSlice'
import FormBlockAddCust from '../componants/FormBlockAddCust'

const AddCustomer = () => {

  const { basicDetailVisibility, apiDetailsVisibility } = useSelector((state) => state.CustomerCardSlice)
  const { iconVisible, filterVisible, data, ApiData } = useSelector((state) => state.CustomerCardSlice)

  const { id } = data[0];
  const AddapiData = useSelector((state) => state.AddApiSlice)

  return (
    <Wrapper color={color} darkcolor={darkColors}>
      <PageHeader title={'Customer Details'} subtitle={'Add API For Customer'} />

      <RibbonsApi ApiDatatoAdd={AddapiData} id={id} />

      <FormBlockAddCust CustAdd={true} disable={true} title={'Basic'} data={data} visibility={basicDetailVisibility} setvisibility={setBasicDetailVisibility} />

      <FormBlockAddAPI ApiAdd={true} disable={false} title={'Api Details'} data={data} visibility={basicDetailVisibility} setvisibility={setBasicDetailVisibility} />

      <ApiTable Userdata={ApiData} iconVisible={iconVisible} filterVisible={filterVisible} />

    </Wrapper>
  )
}

export default AddCustomer
