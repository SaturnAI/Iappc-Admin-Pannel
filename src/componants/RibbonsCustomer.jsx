import React from 'react'
import Wrapper from '../styles/RibbonsStyle';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { SignUp } from '../utils/https';


const RibbonsCustomer = ({ CustomerData}) => {

  const dispatch = useDispatch()

  return (
    <Wrapper>
      <div className="newItemContainer">
        <AddIcon fontSize='small' />
        <div className="text" onClick={() => { }}>New</div>
      </div>
      <div className="savebutton" onClick={async () => {
        const data = await SignUp(CustomerData)
        if (data.success == true) {
          console.log("user created")
        } else {
          console.log(data.message)
        }

      }}>
        Save
      </div>
    </Wrapper>
  )
}

export default RibbonsCustomer