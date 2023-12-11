import React, { useState } from 'react'

//Material Icons
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

//Style
import Wrapper from '../styles/PageHeaderStyle';

//color
import { color, darkColors } from '../assets/colors';
import { useDispatch } from 'react-redux';
import { setLogout } from '../store/LoginScreenSlice';
import Cookies from 'universal-cookie';

const PageHeader = ({ title, subtitle }) => {
    const dispatch = useDispatch();
    const cookies = new Cookies(null, { path: '/' });

    const [visible, setVisible] = useState(false);

    return (
        <Wrapper color={color} darkcolor={darkColors}  >
            <div className="HeaderContainer" >
                <div className="PageTitleContainer">
                    <div className="PageTitle">{title}</div>
                    <div className="PageSubtitle">{subtitle}</div>
                </div>


                <div className="Buttons"  >
                    <DarkModeOutlinedIcon />
                    <NotificationsOutlinedIcon />
                    <SettingsOutlinedIcon />
                    <div className="profileIcon" onMouseOver={()=>setVisible(true)}  >
                        <PersonOutlinedIcon  />
                        {visible &&
                            <div className="LogoutTab" onMouseLeave={()=>setVisible(false)} onClick={async()=>{
                               await cookies.remove('authentication');
                               await cookies.remove('name');
                               await cookies.remove('refresh_token');
                               await cookies.remove('jwtToken');
                               await dispatch(setLogout())
                            }} >
                                Logout
                            </div>}
                    </div>
                </div>

            </div>


        </Wrapper>
    )
}

export default PageHeader
