import React from 'react'

// Styles
import Wrapper from '../styles/TableStyle'

// Colors
import { color, darkColors } from '../assets/colors'

import TableHeaderInsideComponant from './TableHeaderInsideComponant';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterHidden, setFilterVisible, setIconHidden, setIconVisible } from '../store/ManageTeamSlice';
import SortingComponent from './SortingComponent';
import { CSVLink } from 'react-csv';

const Table = ({ iconVisible, filterVisible, Userdata }) => {

    const dispatch = useDispatch()

    const headers = [
        {
            label: 'Id',
            key: 'id',
        },

        {
            label: 'Name',
            key: 'name',
        },
        {
            label: 'Email',
            key: 'email',
        },
        {
            label: 'Age',
            key: 'age',
        },
        {
            label: 'Number',
            key: 'phone',
        },
        {
            label: 'Access Level',
            key: 'access',
        }
    ]

    const csvData = {
        data: Userdata,
        headers: headers,
        filename: 'Iappc_Data.csv'
    }

    return (
        <Wrapper color={color} darkcolor={darkColors}>

            <table cellSpacing={0} >
                <thead>
                    <tr>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Id'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Name'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Age'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Number'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Email'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Access Level'} iconVisible={iconVisible} />
                        </td>
                    </tr>
                </thead>
                {filterVisible && <SortingComponent />}
                <tbody onClick={() => dispatch(setFilterHidden())} >
                    {Userdata.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td><input type="checkbox" /></td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.access}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <div className="exportButton">
                                <CSVLink className='link' {...csvData}>Open in Excel</CSVLink>
                            </div>
                        </td>
                    </tr>
                </tfoot>

            </table>
        </Wrapper>
    )
}

export default Table
