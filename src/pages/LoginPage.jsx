import React from 'react'
import Wrapper from '../styles/LoginPageStyle'
import { color } from '../assets/colors'
import logo from '../assets/logo.png'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigation = useNavigate()

  return (
    <FadeIn>
      <Wrapper color={color}>
        <div className='imageContainer'>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className='formContainer' >
            <div className='usernameText'>Username</div>
            <input type="text" placeholder='John@gmail.com' />
          </div>

          <div className='formContainer'>
            <div className='PasswordText'>Password</div>
            <input type="password" placeholder='Password' />
          </div>
        </div>

        <button onClick={()=>navigation('/dashboard', {replace : true})}>Login</button>

        <div className='orLineContainer'>
          <div className='line'></div>
          <div className='orText'>or</div>
        </div>

        <div className='ForgetButton'>Forget password?</div>

      </Wrapper>
    </FadeIn>
  )
}

export default LoginPage
