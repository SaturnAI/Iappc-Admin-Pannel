import { Input } from 'antd'
import React from 'react'
import Wrapper from '../styles/AddCustomerInputStyle'

const AddCustomerInputBlockComp = ({ disable, first_name , last_name, _id, id, role }) => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='label'>Customer Id</div>
                <Input value={id} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Customer Type</div>
                <Input value={role} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Customer Name</div>
                <Input value={first_name + " " + last_name} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Email</div>
                <Input value={_id} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>


        </Wrapper>
    )
}

export default AddCustomerInputBlockComp;