import React from 'react'

// style
import Wrapper from '../styles/TableHeaderInsideComponantStyle'

// icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterVisible, setIconHidden, setIconVisible } from '../store/ManageTeamSlice';

const TableHeaderInsideComponant = ({ title, iconVisible }) => {

    const dispatch = useDispatch()

    return (
        <Wrapper  >
            {!title ? <input type="checkbox" /> : title}
            <div className="icon" onClick={()=>dispatch(setFilterVisible())}>
                <MoreVertIcon className={iconVisible ? 'visible' : 'hidden'} />
            </div>
        </Wrapper>
    )
}

export default TableHeaderInsideComponant
