import React from 'react'

// style
import Wrapper from '../styles/TableHeaderInsideComponantStyle'

// icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterVisible, setIconHidden, setIconVisible } from '../store/ManageTeamSlice';
import DropDownComp from './DropDownComp';
import { dropOption } from '../utils/ManageTeamDropDownData';

const TableHeaderInsideComponant = ({ title, iconVisible }) => {

    const dispatch = useDispatch()

    return (
        <Wrapper  >
            {title == 'Access Level' ? <DropDownComp width={100} title={'Find'} selectData={dropOption}  find={'find'}   /> : (!title ? <input type="checkbox" /> : title) }
            <div className="icon" onClick={()=>dispatch(setFilterVisible())}>
                <MoreVertIcon className={iconVisible ? 'visible' : 'hidden'} />
            </div>
        </Wrapper>
    )
}

export default TableHeaderInsideComponant
