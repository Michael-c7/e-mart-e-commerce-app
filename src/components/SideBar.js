import React from 'react'
import styled from 'styled-components'
import { Link, useLocation  } from 'react-router-dom';
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


  return (
    <Wrapper>
      <div className={`sidebar-container  ${isSidebarOpen ? 'sidebar-container--opened' :'sidebar-container--closed'}`}>
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar--opened' :'sidebar--closed'}`}>
            <button  className='sidebar__close-btn' onClick={sidebarClose}>&times;</button>

            <ul className='sidebar__items'>
              <li className={`sidebar__item ${currentPath === '/' && 'sidebar__item--current'}`}>
                <Link className='sidebar__item__link' to='/'>Home</Link>
              </li>
              <li className={`sidebar__item ${currentPath === '/about' && 'sidebar__item--current'}`}>
                <Link className='sidebar__item__link' to='/about'>About</Link>
              </li>
              <li className={`sidebar__item ${currentPath === '/products' && 'sidebar__item--current'}`}>
                <Link className='sidebar__item__link' to='/products'>Products</Link>
              </li>
            </ul>
        </nav>
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.section`



/* The side navigation menu */
.sidebar {
  width:0;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  background-color:#fff;
  overflow-x:hidden;
  padding-top:60px; 
  transition:0.5s;
  z-index:999;
}

.sidebar__item {
  padding:8px 8px 8px 32px;
  text-decoration:none;
  font-size:25px;
  color:#444;
  display:block;
  transition:0.3s;
}


.sidebar__item__link {
  color:#444;
}


.sidebar__close-btn {
  position:absolute;
  top:15px;
  right:25px;
  font-size:36px;
  margin-left:50px;
  border:none;
  background:none;
}

.sidebar__item--current .sidebar__item__link {
  color:var(--main-color);
}


.sidebar--opened {
  width:250px;
}

.sidebar--closed {
  width:0;
}


.sidebar-container--opened {
  width:100%;
  height:100%;
  z-index:999;
}

.sidebar-container--closed {
  width:0;
  height:0;
  z-index:-999;
}


// mobile view
@media screen and (max-height:450px) {
  .sidebar {
    padding-top:15px;
  }
  .sidebar__item {
    font-size:18px;
  }
}

@media screen and (max-width:320px) {
  .sidebar--opened {
    width:100%;
  }
}



`