import React from 'react'

// Styles
import Wrapper from '../styles/ContactInformationStyle'
import { PageHeader, Table } from '../componants'
import { color, darkColors } from '../assets/colors'
import { useSelector } from 'react-redux'


const ContactInformation = () => {

    const {iconVisible, filterVisible, data} = useSelector((state)=>state.ManageTeamSlice)

    return (
        <Wrapper color={color} darkcolor={darkColors}>
            <PageHeader title={'Contact Info'} subtitle={'Brief details with Contact'} />
            <Table  Userdata={data} iconVisible={iconVisible} filterVisible={filterVisible} />
        </Wrapper>
    )
}

export default ContactInformation
