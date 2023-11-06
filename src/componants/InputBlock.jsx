import React from 'react'

//Styles
import Wrapper from '../styles/InputBlockStyle';

import {Input} from 'antd';

import { color, darkColors } from '../assets/colors';

const InputBlock = ({title, name, placeholder, type, textarea, input, important}) => {
    
    return (

        <Wrapper color={color} darkcolor={darkColors}>
           <div className="label">{title} {important ? <span className='important'>*</span> : null} </div> 
           {input && <Input  type={type} name={name} placeholder={placeholder} />}
           {textarea && <Input  type={type} name={name} placeholder={placeholder} /> }
        </Wrapper>
    )
}

export default InputBlock
