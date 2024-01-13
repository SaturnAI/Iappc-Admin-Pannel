import React from 'react'
import Wrapper from '../styles/RibbonsStyle';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { AddApiData, fetchAPIData } from '../utils/https';
import Cookies from 'universal-cookie';
import { setApiData } from '../store/CustomerCardSlice';

const RibbonsApi = ({ ApiDatatoAdd, id }) => {
    const cookies = new Cookies(null, { path: '/' });

    const dispatch = useDispatch()

    return (
        <Wrapper>
            <div className="newItemContainer">
                <AddIcon fontSize='small' />
                <div className="text" onClick={() => { }}>New</div>
            </div>
            <div className="savebutton" onClick={async () => {
                const token = cookies.get('jwtToken');
                
                const data = await AddApiData(ApiDatatoAdd, id, token)
                if (data.success) {
                    const data = await fetchAPIData(id, token)
                    await dispatch(setApiData(data))

                }
            }}>
                Save
            </div>
        </Wrapper>
    )
}

export default RibbonsApi