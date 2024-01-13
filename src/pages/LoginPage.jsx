import React, { useState, useEffect, useMemo } from 'react'
import Wrapper from '../styles/LoginPageStyle'
import { color, darkColors } from '../assets/colors'
import logo from '../assets/logo.png'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { useNavigate } from 'react-router-dom'
import { Login, getUser } from '../utils/https'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setLogin, setRole } from '../store/LoginScreenSlice'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Input } from 'antd'
import Cookies from 'universal-cookie'

const LoginPage = () => {

  const cookies = new Cookies(null, { path: '/' });

  const dispatch = useDispatch();
  const navigation = useNavigate()

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const { isAuthenticated, warning } = useSelector((state) => state.LoginScreenSlice)


  useEffect(() => {

    const authentication = cookies.get('authentication');
    const jwtToken = cookies.get('jwtToken');


    if (authentication && jwtToken) {
      dispatch(setLogin(cookies.get('name')));
      dispatch(setRole(cookies.get('role')));
    }

    if (isAuthenticated) {
      navigation("/", { replace: true });
    }

    if (!isAuthenticated) {
      navigation("/landing", { replace: true });
    }

  }, [isAuthenticated])

  const handleClick = async () => {
    const data = await Login(userData);
    if (data.success == true) {
      const data2 = await getUser(data.refresh_token, userData.username);
      if (data2.success == true) { 
        await cookies.set('name', data.name);
        await cookies.set('authentication', true);
        await cookies.set('refresh_token', data.refresh_token);
        await cookies.set('email', userData.username);
        await cookies.set('customerID', data.customer_id);
        await cookies.set('jwtToken', data2.jwtToken);
        await cookies.set('role', data.role);
      }

    }
    await dispatch(setUser({ data, username: userData.username }));
  }

  return (
    <FadeIn>

      <Wrapper color={color} darkcolor={darkColors}>
        {warning &&
          <div className="warning">
            Invalid Credentials
          </div>
        }
        <div className='imageContainer'>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className='formContainer' >
            <div className='labelText'>Username</div>
            <Input prefix={<PersonOutlineOutlinedIcon style={{ color: 'gray' }} />} className='input' type="text" placeholder='John@gmail.com' value={userData.username} onChange={(e) => {
              setUserData({
                ...userData,
                username: e.target.value,
              })
            }
            } />
          </div>

          <div className='formContainer'>
            <div className='labelText'>Password</div>
            <Input.Password type="password" placeholder='Password' value={userData.password} onChange={(e) => {
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }} />
          </div>
        </div>

        <button onClick={async () => await handleClick()}>Login</button>

        <div className='orLineContainer'>
          <div className='line'></div>
          <div className='orText'>or</div>
        </div>

        <div className='ForgetButton'>Forget Password?</div>

      </Wrapper>
    </FadeIn>
  )
}

export default LoginPage
