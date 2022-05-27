import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper>
      <div>e-mart ©{currentYear} copyright</div>
    </Wrapper>
  )
}

export default Footer


const Wrapper = styled.footer`
    background:#F7F7F7;
    font-size:0.925rem;
    padding:1rem;
    text-align:center;
`