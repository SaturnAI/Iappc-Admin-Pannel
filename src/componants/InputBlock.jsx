import React from 'react'

//Styles
import Wrapper from '../styles/InputBlockStyle';

import { Input } from 'antd';

import { color, darkColors } from '../assets/colors';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../store/CustomerCardSlice';
import DropDownComp from './DropDownComp';

const InputBlock = ({ title, name, placeholder, type, password, textarea, DropDown, selectData, customer, input, important}) => {

    const dispatch = useDispatch()

    const [warning, setWarning] = useState(false);

    const handleChange = async (type, value, customer, title) => {
        if (type == 'email') {
            const EmailRegex = new RegExp("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$")
            const val = await EmailRegex.test(value)
            if (val == true) {
                setWarning(false);
                if (customer) {
                    dispatch(setRole({ type: "SET_EMAIL", data: value }))
                }
            } else {
                setWarning(true);
            }
        }

        if (type == 'tel') {
            const phoneRegex = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
            const val = await phoneRegex.test(value)
            if (val == true) {
                setWarning(false);
            }
            else {
                setWarning(true);
            }
        }

        if (type == 'url') {
            const urlRegex = new RegExp("^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$")
            const val = await urlRegex.test(value)
            if (val == true) {
                setWarning(false);
            }
            else {
                setWarning(true);
            }
        }


        if (title == "First Name" && customer) {
            dispatch(setRole({ type: "SET_FIRST_NAME", data: value }))
        }
        if (title == "Last Name" && customer) {
            dispatch(setRole({ type: "SET_LAST_NAME", data: value }))
        }
        if (title == "Password" && customer) {
            dispatch(setRole({ type: "SET_PASSWORD", data: value }))
        }



    }

    return (
        <Wrapper Wrapper color = { color } darkcolor = { darkColors } >
            <div className="label">{title} {important ? <span className='important'>*</span> : null} </div>
    { input && <Input className={warning ? 'inputWarning input' : 'input'} type={type}  placeholder={placeholder} onChange={(e) => handleChange(type, e.target.value, customer, title)} /> }
    { DropDown && <DropDownComp customer={customer} title={title} selectData={selectData} width={230}  /> }
    { textarea && <Input type={type} className='textarea'  placeholder={placeholder} /> }
    { password && <Input.Password className='password' type={type} placeholder={placeholder} onChange={(e) => handleChange(type, e.target.value, customer, title)} /> }
        </Wrapper>
    )
}

export default InputBlock
