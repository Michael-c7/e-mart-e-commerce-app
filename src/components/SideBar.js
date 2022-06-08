import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { VscChromeClose } from "react-icons/vsc"
import { useProductsContext } from '../context/products_context'


const Sidebar = () => {

  const {
    isSidebarOpen,
    sidebarClose,
  } = useProductsContext()

  return (
    <Wrapper>
        <div className={`sidebar-container ${isSidebarOpen ? "" : "offscreen"}`}>
          <section className={`sidebar ${isSidebarOpen ? "sidebar--transition " : ""}`}>
            <button className="sidebar__close-btn" onClick={sidebarClose}>
              <VscChromeClose/>
            </button>
            <ul className="sidebar__items">
              <li className="sidebar__item">
                <Link to="/">Home</Link>
              </li>
              <li className="sidebar__item">
                <Link to="/about">About</Link>
              </li>
              <li className="sidebar__item">
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </section>
        </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.section`
    .sidebar-container {
      top:0;
      position:absolute;
      background:rgba(90, 90, 90, 0.5);
      width:100vw;
      height:100vh;
      overflow:none;
      z-index:999;
    }

    .sidebar {
      position:relative;
      width:20rem;
      height:100%;
      background:#fff;
      padding:1rem;

      transition:transform 0.4s ease;
      transform:translateX(-350px);
    }

    .sidebar--transition {
      transition:transform 0.4s ease;
      transform:translateX(0px);
    }

    .sidebar__close-btn {
      border:none;
      background:none;
      font-weight:700;
      font-size:2rem;

      cursor:pointer;
      margin-bottom:1.5rem;
    }

    .sidebar__close-btn:hover,
    .sidebar__close-btn:focus {
      outline:none;
      transition:color 0.2s ease;
      color:var(--main-color);
      cursor:pointer;
    }

    .sidebar__item {
      margin:0.5rem 0;
    }

    .sidebar__item a {
      font-weight:400;
      font-size:1.075rem;
      color:#000;
    }

    .sidebar__items a:hover,
    .sidebar__items a:focus {
      outline:none;
      transition:color 0.2s ease;
      color:var(--main-color);
      cursor:pointer;
    }



    // mobile view
    @media screen and (max-width: 300px) {
      .sidebar {
        width:100%;
      }
    }

`