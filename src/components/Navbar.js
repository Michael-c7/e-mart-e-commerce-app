import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { BsSearch, BsBag } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi"
import eMartLogo from "../assets/E-MART-logo.svg"
import { useProductsContext } from '../context/products_context'


import Searchbar from "./Searchbar"

const Navbar = () => {
  const {
    isSidebarOpen,
    sidebarOpen
  } = useProductsContext()
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="navbar__group navbar__group-first">
          {/*hamburger menu here for mobile view*/}
          <GiHamburgerMenu className="navbar__hamburger-menu" onClick={sidebarOpen}/>
          <div>
            <img className="navbar__logo" src={eMartLogo} alt="e-mart logo"/>
          </div>
        </div>

        <div className="navbar__group navbar__group-middle">
          <ul className="navbar__items">
            <li className="navbar__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar__item">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className="navbar__group navbar__group-last">
          <button className="navbar__icon navbar__search"><BsSearch/></button>
          <div className="navbar__icon navbar__cart-container">
            <BsBag className="navbar__cart-icon"/>
            <span className="navbar__cart-total">$55.89</span>
            <div className="navbar__item-amt">
              <span>5</span>
            </div>
          </div>
        </div>

      </nav>
      <Searchbar/>
    </Wrapper>
  )
}

export default Navbar


const Wrapper = styled.section`
    .navbar {
      display:flex;
      justify-content:space-around;
      align-items:center;
      background:#fff;
      height:5.6875rem;
    }

    .navbar__hamburger-menu {
      font-size:1.5rem;
      margin-bottom:0.25rem;
      margin-right:0.5rem;
      cursor:pointer;
      display:none;
    }


    .navbar__items {
      display:flex;
      align-items:center;
    }

    .navbar__item {
      margin:0 1rem;
      font-weight:500;
      font-size:1.075rem;
      color:#000;
    }

    .navbar__item a {
      color:#000;
      transition:color 0.2s ease;
    }

    .navbar__item a:hover {
      color:var(--main-color);
    }

    .navbar__icon {
      font-size:1.6rem;
    }


    .navbar__search {
      position:relative;
      border:none;
      background:none;
      top:2px;
      margin-right:1.5rem;
      cursor:pointer;
    }

    .navbar__group-last {
      position:relative;
      display:flex;
      align-items:center;
    }

    .navbar__cart-icon:hover,
    .navbar__search:hover {
      color:var(--main-color);
      transition:color 0.2s ease;
      cursor:pointer;
    }


    .navbar__cart-total {
      position:relative;
      top:-8px;
      font-size:0.95rem;
      font-weight:500;
      margin-left:0.5rem;
    }


    .navbar__item-amt {
      position:absolute;
      font-size:0.7rem;
      background:#000;
      width:20px;
      height:20px;
      border-radius:100px;
      left:37%;
      top:115%;
      transform:translate(-37%, -115%);
    }

    .navbar__item-amt span {
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%, -50%);
      color:#fff;
    }



    // 4k view 
    @media screen and (min-width: 2560px) {
      .navbar__logo {
        transform:scale(1.1);
      }

      .navbar__item {
        font-size:1.475rem;
      }

      .navbar__icon {
        font-size:1.8rem;
      }

    }

    // mobile view 
    @media screen and (max-width: 1024px) {

      .navbar  {
        justify-content:space-between;
        padding:0 1rem;
      }

      .navbar__hamburger-menu,
      .navbar__group-first { 
        display:flex;
      }

      .navbar__group-middle {
        display:none;
      }
    }

    @media screen and (max-width: 326px) {
      .navbar  {
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        padding:0 1rem;
      }
    }
    
`