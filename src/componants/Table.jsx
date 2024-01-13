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
import AddIcon from '@mui/icons-material/Add';
import { setApiData, setData } from '../store/CustomerCardSlice';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { fetchAPIData } from '../utils/https';

const Table = ({ iconVisible, filterVisible, Userdata }) => {

    const dispatch = useDispatch()
    const navigation = useNavigate()

  const {role} = useSelector((state)=>state.CustomerCardSlice);


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

    const cookies = new Cookies(null, { path: '/' });

    return (
        <Wrapper color={color} darkcolor={darkColors}>

            <table cellSpacing={0} >
                <thead>
                    <tr>
                        {
                        role == "customer_admin" && 
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Add API'} iconVisible={iconVisible} />
                        </td>
                        }
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Id'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Name'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Address'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Country'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Pincode'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Email'} iconVisible={iconVisible} />
                        </td>
                        <td onMouseOver={() => dispatch(setIconVisible())} onMouseOut={() => dispatch(setIconHidden())}>
                            <TableHeaderInsideComponant title={'Access Level'} iconVisible={iconVisible}  />
                        </td>
                    </tr>
                </thead>
                {filterVisible && <SortingComponent />}
                <tbody onClick={() => dispatch(setFilterHidden())} >
                    {Userdata.map((item, i) => {

                        return (
                            <tr key={i}>
                                {
                                    role == "customer_admin" &&
                                    <td onClick={async () => {
                                    await dispatch(setData(item))
                                    const data = await fetchAPIData(item.id, cookies.get('jwtToken'))
                                    await dispatch(setApiData(data))
                                    navigation('/addcustomer')
                                }} > <AddIcon /> 
                                </td>}
                                <td>{item?.id}</td>
                                <td>{item?.first_name + " " + item?.last_name}</td>
                                <td>{item?.address ? item?.address : "Not Exist"}</td>
                                <td>{item?.country ? item?.country : "Not Exist"}</td>
                                <td>{item?.pincode ? item?.pincode : "Not Exist"}</td>
                                <td>{item?._id}</td>
                                <td>{item?.role}</td>
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
