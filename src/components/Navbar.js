import React from 'react'
import styled from 'styled-components'
import { Link, useLocation  } from 'react-router-dom';
import { BsSearch, BsBag } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi"
import eMartLogo from "../assets/E-MART-logo.svg"
import { useProductsContext } from '../context/products_context'


import Searchbar from "./Searchbar"

const Navbar = () => {
  const [currentPath, setCurrentPath] = React.useState('')

  const {
    isSidebarOpen,
    sidebarOpen,
    searchbarOpen,
  } = useProductsContext()

  const location = useLocation();


  React.useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])



  return (
    <Wrapper>
      <nav className="navbar">
      {/*where hamburger menu goes & where the logo goes*/}
        <div className="navbar__group__first">
          <GiHamburgerMenu className="navbar__hamburger-menu" onClick={sidebarOpen}/>
          <Link to="/">
            <img className="navbar__logo" src={eMartLogo} alt="e-mart logo"/>
          </Link>
        </div>
      {/*where home, about, products links go*/}
        <div className="navbar__group__second">
          <ul className="navbar__items">
            <li className={`navbar__item ${currentPath === '/' && "navbar__item--current"}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`navbar__item ${currentPath === '/about' && "navbar__item--current"}`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`navbar__item ${currentPath === '/products' && "navbar__item--current"}`}>
              <Link to="/products">Products</Link>
          </li>
          </ul>
        </div>
      {/*where search icon & cart bag goes */}
        <div className="navbar__group__third">
          <button className="navbar__icon navbar__search" onClick={searchbarOpen}><BsSearch/></button>
          <div className="navbar__icon navbar__cart-container">
            <Link to='/cart'>
              <BsBag className="navbar__cart-icon"/>
            </Link>
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


const Wrapper = styled.nav`
    .navbar {
      position:relative;
      background:#fff;
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:1.8rem var(--general-spacing);
      z-index:500;
    }


    .navbar__group__first,
    .navbar__group__second,
    .navbar__group__third {
      display:flex;
      align-items:center;
    }

    .navbar__hamburger-menu {
      font-size:1.5rem;
      margin-bottom:0.25rem;
      margin-right:0.5rem;
      cursor:pointer;
      display:none;
    }

    .navbar__group__second {
      position:absolute;
      left:50%;
      transform:translateX(-50%);
    }

    .navbar__items {
      display:flex;
      justify-content:center;
      align-items:center;
      font-weight:500;
      font-size:1.15rem;
      color:#000;
      transition:color 0.2s ease;
    }

    .navbar__item {
      margin:0 1rem;
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
      color:#000;
    }

    .navbar__icon a {
      color:#000;
    }

    .navbar__item--current a {
      color:var(--main-color);
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


    .navbar__cart-container {
      position:relative;
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
      left:0%;
      top:50%;
      transform:translate(-50%, -0%);
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
      .navbar__hamburger-menu { 
        display:block;
      }
    }

    @media screen and (max-width: 768px) {
      .navbar__group__second {
        display:none;
      }
    }

    
    @media screen and (max-width: 375px) {
      .navbar  {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }

      .navbar__group__third {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }

      .navbar__search {
        margin:0.5rem 0;
      }
    }

    
`