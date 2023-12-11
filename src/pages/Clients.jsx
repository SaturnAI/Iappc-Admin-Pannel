import React from 'react'

// Styles
import Wrapper from '../styles/ClientsStyle';

//Assets
import { color, darkColors } from '../assets/colors';

//Componants
import { PageHeader, Table} from '../componants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSignUpData } from '../utils/https';
import Cookies from 'universal-cookie';
import { setData } from '../store/ManageTeamSlice';

const Clients = () => {

  const cookies = new Cookies(null, { path: '/' });
  const dispatch = useDispatch()

  useEffect(()=>{
    
    const fetchData = async() => {
        const token = await cookies.get('jwtToken');
        const data = await fetchSignUpData('customer_admin', token);
        await dispatch(setData(data));
    }
    fetchData();
  },[])

  const { iconVisible, filterVisible, data } = useSelector((state) => state.ManageTeamSlice)

  return (
    <Wrapper color={color} darkcolor={darkColors}>
      <PageHeader title={'Manage Team'} subtitle={'Manage your Clients or Team'} />
      <Table Userdata={data} iconVisible={iconVisible} filterVisible={filterVisible}   />
    </Wrapper>
  )
}

export default Clients
