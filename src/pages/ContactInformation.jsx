import React from 'react'

// Styles
import Wrapper from '../styles/ContactInformationStyle'
import { FormBlock, PageHeader, RibbonsCustomer, Table } from '../componants'
import { color, darkColors } from '../assets/colors'
import { useSelector } from 'react-redux'
import { AddCustomerDetails } from '../utils/AddCustomerData'
import { setCustomerBlockVisibility } from '../store/ManageTeamSlice'


const ContactInformation = () => {

    const {iconVisible, filterVisible, data, CustomerBlockVisibility} = useSelector((state)=>state.ManageTeamSlice)

    return (
        <Wrapper color={color} darkcolor={darkColors}>
            <PageHeader title={'Create Customer'} subtitle={'Add Customer to Your Organization'} />
            <RibbonsCustomer />
            {/* <Table  Userdata={data} iconVisible={iconVisible} filterVisible={filterVisible} /> */}
            <FormBlock title={'Customer Details'} data={AddCustomerDetails} visibility={CustomerBlockVisibility} setvisibility={setCustomerBlockVisibility} />
        </Wrapper>
    )
}

export default ContactInformation
