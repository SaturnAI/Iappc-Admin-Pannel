limport React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Wrapper from '../styles/NavbarStyle';
import { color } from '../assets/colors';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoutCard } from '../store/DashboardSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigation = useNavigate()

    const dispatch = useDispatch()
    const {logoutCard} = useSelector((state) => state.DashboardSlice)
    
    return (
        <Wrapper color={color}>
            <div className='headerContainer'>
                <div className="searchContainer">
                    <input type="text" placeholder='Search' />
                    <span className='searchIcon'>
                        <SearchOutlinedIcon />
                    </span>
                </div>

                <div className="profileContainer" onClick={() => dispatch(setLogoutCard())}>
                    <div className='profileIcon'>
                        <div className="usernameContainer">
                            Shubham Verma
                        </div>
                        <AccountCircleRoundedIcon style={{ color: color.primary }} fontSize='large' />
                    </div>

                    {
                        logoutCard
                            ?
                            <div onClick={()=> navigation('/', {replace : true}) } className="profileDetailCard">
                                Logout
                            </div>
                            :
                            null
                    }
                </div>

            </div>

        </Wrapper>
    )
}

export default Navbar
