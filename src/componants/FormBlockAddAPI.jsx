import React from 'react'

// Style
import Wrapper from '../styles/FormBlockStyle'

// colors
import { color, darkColors } from '../assets/colors'

import InputBlock from './InputBlock'
import { useDispatch, useSelector } from 'react-redux'
import AddCustomerInputBlockComp from './AddCustomerInput'
import AddApiInputBlockComp from './AddApiInpuBlock'

const FormBlockAddAPI = ({ title, data, visibility, setvisibility, AddCustomer, ApiAdd, disable }) => {
    const dispatch = useDispatch()
    return (

        <Wrapper color={color} darkcolors={darkColors}>

            <div className="dropdownContainer" onClick={() => dispatch(setvisibility())}>
                <div className="title">{title}</div>
                <div className="seemorebutton" >see more</div>
            </div>

            {visibility &&

                <div className="inputFields">
                    {
                        data.map((item, i) => {
                            
                            return (
                                <div key={i}>
                                    <AddApiInputBlockComp
                                        {...item}
                                        disable={disable}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            }

        </Wrapper>

    )
}

export default FormBlockAddAPI
