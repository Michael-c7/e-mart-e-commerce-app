import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { BsSearch, BsBag } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <div>
          {/*hamburger menu here for mobile view*/}
          <GiHamburgerMenu/>
          <h1 className="navbar__header">e<span>Mart</span></h1>
        </div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>
        <div>
          <div><BsSearch/></div>
          <div><BsBag/></div>
        </div>
      </nav>
    </Wrapper>
  )
}

export default Navbar


const Wrapper = styled.section`
    
`