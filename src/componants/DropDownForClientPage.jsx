import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setEnquiry, setRole, setSaleOrder, SetRoleForAddCust } from '../store/CustomerCardSlice';
import { setData, setFind } from '../store/ManageTeamSlice';
import Cookies from 'universal-cookie';
import { fetchSignUpData } from '../utils/https';

const DropDownForClientPage = ({ selectData, customer, title, width, find, accessLevel, defaultValue}) => { 
  const dispatch = useDispatch()
  const cookies = new Cookies(null, { path: '/' });

  const handleChange = async (value, customer, title) => {
    
    if (customer && accessLevel == "Access Level") {
      await dispatch(setRole({ type: "SET_CUSTOMER_TYPE", data: value }))
    }

    if(customer && title == "Customer Type"){
         await dispatch(SetRoleForAddCust(value))
    }
    if(customer && title == "Sale Order"){
         await dispatch(setSaleOrder(value))
    }
    if(customer && title == "Enquiry"){
      await dispatch(setEnquiry(value))
    }

    if(find && title=='Find'){
        await dispatch(setFind(value))
        const token = await cookies.get('jwtToken')
        const data = await fetchSignUpData(value, token);
        await dispatch(setData(data))
    }
  };

  return (
    <Select
      defaultValue="customer_admin"
      style={{
        width: width,
        height: 25,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14
      }}
      onChange={(value) => handleChange(value, customer, title)}
      options={selectData}
    />
  )
};
export default DropDownForClientPage