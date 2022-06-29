import React from 'react'
import styled from 'styled-components'
import { Link, useLocation  } from 'react-router-dom';
import { VscChromeClose } from "react-icons/vsc"
import { useProductsContext } from '../context/products_context'


const Sidebar = () => {
  const [currentPath, setCurrentPath] = React.useState('')

  const {
    isSidebarOpen,
    sidebarClose,
  } = useProductsContext()

  const location = useLocation();

  React.useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  const closeSidebar = _ => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidenav-container").style.backgroundColor = "#fff";
    document.getElementById("sidenav-container").style.height = "0";
    document.getElementById("sidenav-container").style.zIndex = "-999";
    // sidebarClose()
  }

  return (
    <Wrapper>
      <div id='sidenav-container'>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onClick={closeSidebar}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.section`
#sidenav-container {
  position:fixed;
  z-index:600;
  top:0;
}


/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: absolute; /* Stay in place */
  z-index: 9999; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  z-index:999;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #444;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

`