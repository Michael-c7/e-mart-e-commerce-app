import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='error-page__info'>
        <h1 className='error-page__heading'>Page not found</h1>
        <Link className='standard-button error-page__btn' to="/">Go home</Link>
      </div>
      
    </Wrapper>
  )
}

export default ErrorPage

const Wrapper = styled.section`
  width:100%;
  height:100vh;

  .error-page__info {
    position:absolute;
    left:50%;
    top:25%;
    transform:translate(-50%, -25%);
    text-align:center;
  }

  .error-page__heading {
    margin-bottom:2rem;
    font-weight:600;
  }

`