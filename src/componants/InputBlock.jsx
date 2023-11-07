import React from 'react'

//Styles
import Wrapper from '../styles/InputBlockStyle';

import {Input} from 'antd';

import { color, darkColors } from '../assets/colors';
import { useState } from 'react';

const InputBlock = ({title, name, placeholder, type, textarea, input, important}) => {

   const[warning, setWarning] = useState(false);

    const handleChange = async (type, value) => {
        if(type == 'email'){
            const EmailRegex = new RegExp("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$")
            const val = await EmailRegex.test(value)
            if(val == true){
                setWarning(false);
            }else{
                setWarning(true);
            }
        }
        
        if(type == 'tel'){
             const phoneRegex = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
             const val = await phoneRegex.test(value)
             if(val == true){
                setWarning(false);
             }
             else{
                setWarning(true);
             }
        }

        if(type == 'url'){
            const urlRegex = new RegExp("^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$")
            const val = await urlRegex.test(value)
            if(val == true){
               setWarning(false);
            }
            else{
               setWarning(true);
            }
        }

       
        
    }
    
    return (

        <Wrapper color={color} darkcolor={darkColors}>
           <div className="label">{title} {important ? <span className='important'>*</span> : null} </div> 
           {input && <Input  className={warning ? 'inputWarning' : null} type={type} name={name} placeholder={placeholder}  onChange={(e)=>handleChange(type, e.target.value)} />}   
          
           {textarea && <Input  type={type} name={name} placeholder={placeholder} /> }
        </Wrapper>
    )
}

export default InputBlock
