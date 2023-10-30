import React from 'react'

//Style
import Wrapper from '../styles/StatsCardStyle'

//material icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';

//colors
import { color, darkColors } from '../assets/colors'

const StatsCard = ({ data, text, Progress, id }) => {

  return (
    <Wrapper color={color} darkcolor={darkColors}>
      <div className="leftItems">

        <div className="Icons">
          {id == 0 ?
            <EmailOutlinedIcon />
            :
            id == 1 ?
              <PointOfSaleOutlinedIcon />
              :
              id == 2 ?
                <PersonAddOutlinedIcon />
                :
                id == 3 ?
                  <TrafficOutlinedIcon />
                  :
                  null}
        </div>

        <div className="data">
          {data}
        </div>
        <div className="text">
          {text}
        </div>
      </div>
      <div className="rightItem">
        <div className="progressBar">
          progress
        </div>
        <div className="percentage">
          {Progress}
        </div>
      </div>
    </Wrapper>
  )
}

export default StatsCard
