import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// misc
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import { useProductsContext } from '../context/products_context'

// components
import ImageSlider from '../components/ImageSlider'
// import StarRating from '../components/StarRating'
import InfoBoxes from '../components/InfoBoxes'
import CollectionShowcase from '../components/CollectionShowcase'
import Banner from '../components/Banner'
import NewArrivalShowcase from '../components/NewArrivalShowcase'

import Overlay from '../components/Overlay'





const HomePage = () => {
  const {
    isSidebarOpen,
    sidebarOpen,
    products,
    productsLoading,
    productsError,
  } = useProductsContext()


  

  return (
    <Wrapper>
      
      <ImageSlider/>

      <InfoBoxes/>

      <CollectionShowcase/>

      <Banner/>

      <NewArrivalShowcase/>
    </Wrapper>
  )
}

export default HomePage

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


--standard-width:60vw;

@media only screen and (max-width:1440px) {
  --standard-width:70vw;
}

@media only screen and (max-width:1024px) {
  --standard-width:95vw;
}

@media only screen and (max-width:768px) {
  --standard-width:100vw;
}



`