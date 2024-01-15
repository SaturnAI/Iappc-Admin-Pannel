import React from 'react'

// Style
import Wrapper from '../styles/FormBlockStyle'

// colors
import { color, darkColors } from '../assets/colors'

import InputBlock from './InputBlock'
import { useDispatch, useSelector } from 'react-redux'
import AddCustomerInputBlockComp from './AddCustomerInput'

const FormBlock = ({ title, data, visibility, setvisibility, AddCustomer, CustAdd}) => {

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
                                    {CustAdd ?
                                        <AddCustomerInputBlockComp
                                            disable={true}
                                            title={item.title}
                                        />
                                        :
                                        <InputBlock   {...item} key={i} />
                                    }

                                </div>
                            )
                        })
                    }
                </div>
            }

        </Wrapper>

    )
}

export default FormBlock
