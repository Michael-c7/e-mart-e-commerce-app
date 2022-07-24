import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'

// components
import ImageSlider from '../components/ImageSlider'
// import StarRating from '../components/StarRating'
import InfoBoxes from '../components/InfoBoxes'
import CollectionShowcase from '../components/CollectionShowcase'
import Banner from '../components/Banner'
import NewArrivalShowcase from '../components/NewArrivalShowcase'



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