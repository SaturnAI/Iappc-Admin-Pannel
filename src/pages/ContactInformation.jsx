import React from 'react'




// Styles
import Wrapper from '../styles/ContactInformationStyle'
import { FormBlock, PageHeader, RibbonsCustomer, Table } from '../componants'
import { color, darkColors } from '../assets/colors'
import { useSelector } from 'react-redux'
import { AddCustomerDetails } from '../utils/AddCustomerData'
import { setCustomerBlockVisibility } from '../store/ManageTeamSlice'
import { setRole , resetForm} from '../store/CustomerCardSlice'



const ContactInformation = () => {

    const { iconVisible, filterVisible, data, CustomerBlockVisibility } = useSelector((state) => state.ManageTeamSlice)
    const CustomerData = useSelector((state) => state.CustomerCardSlice)
    

    
    return (
        <Wrapper color={color} darkcolor={darkColors}>
            <PageHeader title={'Create Customer'} subtitle={'Add Customer to Your Organization'} />
            <RibbonsCustomer CustomerData={CustomerData}  />
            {/* <Table  Userdata={data} iconVisible={iconVisible} filterVisible={filterVisible} /> */}

            <FormBlock
                title={'Customer Details'}
                data={AddCustomerDetails}
                visibility={CustomerBlockVisibility}
                setvisibility={setCustomerBlockVisibility}
                AddCustomer={setRole}
                valueData={CustomerData}
            />

            
        </Wrapper>
    )
}

export default ContactInformation
