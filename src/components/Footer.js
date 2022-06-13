import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper>
      <h5 className='footer__heading'>© {currentYear} e-mart All rights reserved</h5>
    </Wrapper>
  )
}

export default Footer


const Wrapper = styled.footer`
    background:#F7F7F7;
    font-size:0.925rem;
    padding:2rem 0rem;
    text-align:center;

   .footer__heading {
    margin:0;
    padding:0;
    font-weight:400;
    font-size:1.025rem;
   }
`