import React from 'react'

// Styles
import Wrapper from '../styles/ClientsStyle';

//Assets
import { color, darkColors } from '../assets/colors';

//Componants
import { PageHeader, Table} from '../componants';
import { useSelector } from 'react-redux';


const Clients = () => {

  const { iconVisible, filterVisible, data } = useSelector((state) => state.ManageTeamSlice)

  return (
    <Wrapper color={color} darkcolor={darkColors}>
      <PageHeader title={'Manage Team'} subtitle={'Manage your Clients or Team'} />
      <Table Userdata={data} iconVisible={iconVisible} filterVisible={filterVisible} />
    </Wrapper>
  )
}

export default Clients
