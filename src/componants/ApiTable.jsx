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
                            <TableHeaderInsideComponant title={'Destination Name'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Api Type'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Api URL'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Client ID'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisibleCust())} onMouseOut={() => dispatch(setIconHiddenCust())}>
                            <TableHeaderInsideComponant title={'Client Secret'} iconVisible={iconVisible} />
                        </td>

                    </tr>
                </thead>

                <tbody onClick={() => dispatch(setFilterHiddenCust())} >

                    {Userdata.map((item, i) => {

                        return (
                            <tr key={i}>
                                <td><DeleteForeverRoundedIcon /></td>
                                <td>{item.DestinationName}</td>
                                <td>{item.ApiType}</td>
                                <td>{item.ApiUrl}</td>
                                <td>{item.ClientId}</td>
                                <td>{item.ClientSecret}</td>
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
