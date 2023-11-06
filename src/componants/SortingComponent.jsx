import React from 'react'
import Wrapper from '../styles/SortingComponentStyle'
import DropMenuOptions from './DropMenuOptions'
import { color, darkColors } from '../assets/colors'
import { Operator, column } from '../utils/FilterData'
import { useDispatch, useSelector } from 'react-redux'
import { setText, startFilter } from '../store/ManageTeamSlice'


const SortingComponent = () => {

  const dispatch = useDispatch()
  const { text } = useSelector((state) => state.ManageTeamSlice)


  return (
    <Wrapper color={color} darkcolor={darkColors}>
      <div className="container">
        <div className="columnName">
          <DropMenuOptions column={column} />
        </div>
        <div className="operatorName">
          <DropMenuOptions Operator={Operator} />
        </div>
        <div className="textField">
          <input type='text' placeholder='type here' value={text} onChange={async(e) => {
           await  dispatch(setText(e.target.value))
           await  dispatch(startFilter(e.target.value))
          }} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SortingComponent