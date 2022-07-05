import React from 'react'
import styled from 'styled-components'

import { useProductsContext } from '../context/products_context'



const Overlay = () => {
  const { isSidebarOpen } = useProductsContext()

  
  return (
    <Wrapper>
        <div className={`main ${isSidebarOpen ? 'main-container--opened' : 'main-container--closed'}`} id='main'></div>
    </Wrapper>
  )
}

export default Overlay


const Wrapper = styled.section`
.main {
    position:absolute;
    background:rgba(0,0,0,0.5);
    top:0;
    width:100%;
    height:100%;
    z-index:-998;
    opacity:0;
    transition:zIndex opacity 0.5s;
  }
  
  
  .main-container--opened {
    z-index:998;
    opacity:1;
  }
  
  .main-container--closed {
    z-index:-998;
    opacity:0;
  }
`