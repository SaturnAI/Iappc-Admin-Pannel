import React from 'react'
import Wrapper from '../styles/RibbonsStyle';
import AddIcon from '@mui/icons-material/Add';

const RibbonsCustomer = () => {
  return (
    <Wrapper>
        <div className="newItemContainer">
             <AddIcon  fontSize='small'/>
             <div className="text">New</div>
        </div>
        <div className="savebutton">
          Save
        </div>
    </Wrapper>
  )
}

export default RibbonsCustomer