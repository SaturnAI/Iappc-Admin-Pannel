import React from 'react'
import Wrapper from '../styles/DropMenuOptionsStyle'
import { color, darkColors } from '../assets/colors'
import { useDispatch } from 'react-redux'
import { setColumn, setOperator } from '../store/ManageTeamSlice'

const DropMenuOptions = ({ column, Operator }) => {

    const dispatch = useDispatch()

    return (
        <Wrapper color={color} darkcolor={darkColors}>

            {column
                &&
                <select  onChange={(e)=>dispatch(setColumn(e.target.value))} >
                    <option disabled>Column</option>
                    {
                        (column
                            &&
                            column.map((item) => {
                                return (
                                    <option value={item.value}>{item.title}</option>
                                )
                            })
                        )

                    }
                </select>}

            {Operator
                &&
                <select onChange={(e)=>dispatch(setOperator(e.target.value))}>
                    <option disabled>Operator</option>
                    {
                        (Operator
                            &&
                            Operator.map((item) => {
                                return (
                                    <option value={item.value}>{item.title}</option>
                                )
                            })
                        )

                    }
                </select>}

        </Wrapper>
    )
}

export default DropMenuOptions