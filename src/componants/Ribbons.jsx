import React from 'react'
import Wrapper from '../styles/RibbonsStyle';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';


const Ribbons = () => {

  const dispatch = useDispatch()
  return (
    <Wrapper>
        <div className="newItemContainer">
             <AddIcon  fontSize='small'/>
             <div className="text">New</div>
        </div>
        <div className="savebutton"  >
          save
        </div>
    </Wrapper>
  )
}

export default Ribbons