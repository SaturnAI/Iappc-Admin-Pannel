import { Input } from 'antd'
import React, { useState } from 'react'
import Wrapper from '../styles/AddApiInputStyle'
import { useDispatch, useSelector } from 'react-redux';
import { AddNewApiData, setApiName, setEnvironments } from '../store/AddApiSlice';
import DropDownForApiDetails from './DropDownForApiDetails';

import { ApiDropDown, environment } from '../utils/ApiDropDownData'

const AddApiInputBlockComp = ({ disable }) => {

    const dispatch = useDispatch();

    const {ApiName, Type, Environment, LoginKey, ClientID, ClientSecret, Scope, DataUrl } = useSelector((state) => state.AddApiSlice)
   

    return (
        <Wrapper>
            <div className='container'>
                <div className='label'>Api Name</div>
                <DropDownForApiDetails data={ApiDropDown} defaultValue="salesledby" change={setApiName}  />
            </div>
            <div className='container'>
                <div className='label'>Type</div>
                <Input onChange={(e) => dispatch(AddNewApiData({ type: 'Type', data: e.target.value }))} value={Type} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Environment</div>
                <DropDownForApiDetails data={environment}  defaultValue="uat" change={setEnvironments} />
            </div>
            <div className='container'>
                <div className='label'>Login URL</div>
                <Input value={LoginKey}
                    onChange={(e) => dispatch(AddNewApiData({ type: 'LoginKey', data: e.target.value }))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Client ID</div>
                <Input value={ClientID}
                    onChange={(e) => dispatch(AddNewApiData({ type: 'ClientID', data: e.target.value }))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Client Secret</div>
                <Input value={ClientSecret}
                    onChange={(e) => dispatch(AddNewApiData({ type: 'ClientSecret', data: e.target.value }))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Scope</div>
                <Input value={Scope}
                    onChange={(e) => dispatch(AddNewApiData({ type: 'Scope', data: e.target.value }))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Data URL</div>
                <Input value={DataUrl}
                    onChange={(e) => dispatch(AddNewApiData({ type: 'DataURL', data: e.target.value }))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>

        </Wrapper>
    )
}

export default AddApiInputBlockComp;