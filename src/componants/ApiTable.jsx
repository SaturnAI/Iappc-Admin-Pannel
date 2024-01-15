import React from 'react'

// Styles
import Wrapper from '../styles/ApiTableStyle';

// Colors
import { color, darkColors } from '../assets/colors'

import TableHeaderInsideComponant from './TableHeaderInsideComponant';
import { useDispatch, useSelector } from 'react-redux';
import { setIconVisibleCust, setIconHiddenCust, setFilterHiddenCust, setFilterVisibleCust } from '../store/CustomerCardSlice';
import SortingComponent from './SortingComponent';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Input } from 'antd';


const ApiTable = ({ iconVisible, filterVisible, Userdata }) => {

    const dispatch = useDispatch()

    return (
        <Wrapper color={color} darkcolor={darkColors}>

            <table cellSpacing={0} >
                <thead>
                    <tr>
                        <td>
                            Delete
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Api Name'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Type'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Data URL'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Environment'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Login URL'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Client ID'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Client Secret'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Scope'} iconVisible={iconVisible} />
                        </td>

                    </tr>
                </thead>

                <tbody onClick={() => dispatch(setFilterHiddenCust())} >

                    {Userdata.map((item, i) => {
                        return (

                            <tr key={i}>
                                <td><DeleteForeverRoundedIcon /></td>

                                <td>{item.api_name}</td>
                                <td>{item.type}</td>
                                <td>{item.data_url}</td>
                                <td>{item.environment}</td>
                                <td>{item.login_url}</td>
                                <td>{item.client_id}</td>
                                <td>{item.client_secret}</td>
                                <td>{item.scope}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                        </td>
                    </tr>
                </tfoot>

            </table>
        </Wrapper>
    )
}

export default ApiTable
