import React, { useEffect } from 'react'
import Wrapper from '../styles/DashboardStyle'
import Cookies from 'universal-cookie'

//Import colors
import { color, darkColors } from '../assets/colors.jsx'

//componants
import { PageHeader, StatsCard } from '../componants'
import { StatsCardData } from '../utils/mockData'
import { getUser } from '../utils/https.jsx'
import { useDispatch, useSelector } from 'react-redux'


const Dashboard = () => {

  const dispatch = useDispatch
  

  

  

  return (
    <Wrapper color={color} darkcolor={darkColors}>
      <PageHeader title={'Dashboard'} subtitle={'Welcome to the Dashboard'} />

      <div className="StatsCardContainer">
        {
          StatsCardData.map((item, index) => {
            return (
              <StatsCard key={index} {...item} />
            )
          })
        }
      </div>


    </Wrapper>
  )
}

export default Dashboard
