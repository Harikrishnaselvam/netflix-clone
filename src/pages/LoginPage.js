import React,{useState} from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'


const LoginPage = () => {
  return (
    <Wrapper>
      <BackgroundImage/>
        <div className='loginContent'>
          <Header/>
          <div className='form'>
            <div className='title'>
              <h1>login</h1>
            </div>
            <div className='container'>
              <input type="text"
              placeholder="email"
              />
               <input type="password"
              placeholder="password"
              />
              <button>Login</button>
            </div>
          </div>
        </div>
    </Wrapper>
  )
}     

const Wrapper = styled.div`
position:relative;
.loginContent{
  position:absolute;
  top:0;
  left:0;
}
`


export default LoginPage