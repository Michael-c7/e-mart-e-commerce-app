import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// misc
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useProductsContext } from '../context/products_context'

//components
import ImageSlider from '../components/ImageSlider'
import StarRating from '../components/StarRating'
import InfoBoxes from '../components/InfoBoxes'
import CollectionShowcase from '../components/CollectionShowcase'
import Banner from '../components/Banner'






const HomePage = () => {
  const {
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

    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.section`
--info-boxes-width:55vw;




`