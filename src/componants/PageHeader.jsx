import React from 'react'

//Material Icons
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

//Style
import Wrapper from '../styles/PageHeaderStyle';

//color
import { color, darkColors } from '../assets/colors';

const PageHeader = ({title, subtitle}) => {
    return (
        <Wrapper color={color} darkcolor={darkColors} >
            <div className="HeaderContainer">
                <div className="PageTitleContainer">
                    <div className="PageTitle">{title}</div>
                    <div className="PageSubtitle">{subtitle}</div>
                </div>


                <div className="Buttons">
                    <DarkModeOutlinedIcon />
                    <NotificationsOutlinedIcon />
                    <SettingsOutlinedIcon />
                    <PersonOutlinedIcon />
                </div>
            </div>
        </Wrapper>
    )
}

export default PageHeader
