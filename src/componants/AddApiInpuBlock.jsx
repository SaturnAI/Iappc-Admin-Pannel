import { Input } from 'antd'
import React, {useState} from 'react'
import Wrapper from '../styles/AddApiInputStyle'
import { useDispatch, useSelector } from 'react-redux';
import { AddNewApiData } from '../store/AddApiSlice';

const AddApiInputBlockComp = ({ disable }) => {

    const dispatch = useDispatch();

    const { DestinationName, AuthUrl, DataUrl, Environment, LoginKey, ClientID, ClientSecret} = useSelector((state)=>state.AddApiSlice)


    return (
        <Wrapper>
            <div className='container'>
                <div className='label'>Destination Name</div>
                <Input value={DestinationName} onChange={(e) => dispatch(AddNewApiData({type : 'DestinationName' , data : e.target.value}))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Auth Url</div>
                <Input onChange={(e)=> dispatch(AddNewApiData({type : 'AuthUrl' , data : e.target.value}))} value={AuthUrl} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Data Url</div>
                <Input 
                onChange={(e)=>dispatch(AddNewApiData({type : 'DataUrl' , data : e.target.value}))} value={DataUrl} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Environment</div>
                <Input value={Environment} 
                onChange={(e)=>dispatch(AddNewApiData({type : 'Environment' , data : e.target.value}))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Login Key</div>
                <Input value={LoginKey} 
                onChange={(e)=>dispatch(AddNewApiData({type : 'LoginKey' , data : e.target.value}))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Client ID</div>
                <Input value={ClientID} 
                onChange={(e)=>dispatch(AddNewApiData({type : 'ClientID' , data : e.target.value}))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            <div className='container'>
                <div className='label'>Client Secret</div>
                <Input value={ClientSecret} 
                onChange={(e)=>dispatch(AddNewApiData({type : 'ClientSecret' , data : e.target.value}))} disabled={disable ? disable : false} style={disable ? { color: 'white' } : { color: 'black' }} />
            </div>
            
        </Wrapper>
    )
}

export default AddApiInputBlockComp;