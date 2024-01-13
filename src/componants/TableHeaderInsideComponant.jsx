import React from 'react'

// style
import Wrapper from '../styles/TableHeaderInsideComponantStyle'

// icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterVisible, setIconHidden, setIconVisible } from '../store/ManageTeamSlice';
import DropDownComp from './DropDownComp';
import { dropOption } from '../utils/ManageTeamDropDownData';
import DropDownForClientPage from './DropDownForClientPage';

const TableHeaderInsideComponant = ({ title, iconVisible, customer }) => {
    
    const dispatch = useDispatch()

    return (
        <Wrapper  >
            {title == 'Access Level' ? <DropDownForClientPage width={100} title={'Find'} accessLevel={title} selectData={dropOption}  find={'find'} customer={"true"} /> : (!title ? <input type="checkbox" /> : title) }
            <div className="icon" onClick={()=>dispatch(setFilterVisible())}>
                <MoreVertIcon className={iconVisible ? 'visible' : 'hidden'} />
            </div>
        </Wrapper>
    )
}

export default TableHeaderInsideComponant
