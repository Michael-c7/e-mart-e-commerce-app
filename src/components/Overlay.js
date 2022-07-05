import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'

const Overlay = () => {
  const { isSidebarOpen, sidebarClose } = useProductsContext()
  
  return (
    <Wrapper>
        <div onClick={sidebarClose} className={`overlay ${isSidebarOpen ? 'overlay-container--opened' : 'overlay-container--closed'}`}></div>
    </Wrapper>
  )
}

export default Overlay


const Wrapper = styled.section`
.overlay {
    position:absolute;
    background:rgba(0,0,0,0.5);
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-998;
    opacity:0;
    transition:zIndex opacity 0.5s;
  }
  
  
  .overlay-container--opened {
    z-index:998;
    opacity:1;
  }
  
  .overlay-container--closed {
    z-index:-998;
    opacity:0;
  }
`