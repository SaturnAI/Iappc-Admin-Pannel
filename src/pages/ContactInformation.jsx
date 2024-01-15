import React from 'react'
import 'react-toastify/dist/ReactToastify.css';



// Styles
import Wrapper from '../styles/ContactInformationStyle'
import { FormBlock, PageHeader, RibbonsCustomer, Table } from '../componants'
import { color, darkColors } from '../assets/colors'
import { useSelector } from 'react-redux'
import { AddCustomerDetails } from '../utils/AddCustomerData'
import { setCustomerBlockVisibility } from '../store/ManageTeamSlice'
import { setRole , resetForm} from '../store/CustomerCardSlice'
import { ToastContainer, toast } from 'react-toastify';


const ContactInformation = () => {

    const { iconVisible, filterVisible, data, CustomerBlockVisibility } = useSelector((state) => state.ManageTeamSlice)
    const CustomerData = useSelector((state) => state.CustomerCardSlice)
    const notify = (message) => toast(`${message}`);

    
    return (
        <Wrapper color={color} darkcolor={darkColors}>
            <PageHeader title={'Create Customer'} subtitle={'Add Customer to Your Organization'} />
            <RibbonsCustomer CustomerData={CustomerData} Notification={notify}  />
            {/* <Table  Userdata={data} iconVisible={iconVisible} filterVisible={filterVisible} /> */}

            <FormBlock
                title={'Customer Details'}
                data={AddCustomerDetails}
                visibility={CustomerBlockVisibility}
                setvisibility={setCustomerBlockVisibility}
                AddCustomer={setRole}
                valueData={CustomerData}
            />

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce />
        </Wrapper>
    )
}

export default ContactInformation
