import React from 'react'
import Wrapper from '../styles/LandingPageStyle'
import { color } from '../assets/colors'
import { TypeAnimation } from 'react-type-animation';
import FadeIn from 'react-fade-in';
import LoginPage from './LoginPage';

const LandingPage = () => {
  return (
    <Wrapper color={color}>

      <div>
        <img className='image' src="https://www.iappc.in/assets/img/hero-img.png" alt="image" />

        <div className="title">
          <FadeIn delay={200} transitionDuration={1000}>
            <h1 >Strengthen your Business with our Solutions</h1>
          </FadeIn>
          <FadeIn delay={300} transitionDuration={1000}>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'We Develop Solution....',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'We Deliver Solution....',
                1000,
                'We Give Support....',
                1000,

              ]}
              wrapper="span"
              speed={50}
              style={{ textAlign: 'center', fontWeight: 500, color: color.Black, fontSize: '1rem', display: 'inline-block', }}
              repeat={Infinity}
            />
          </FadeIn>

        </div>

      </div>
      <div className='LoginFormContainer'>
        <LoginPage />
      </div>


    </Wrapper>

  )
}

export default LandingPage
