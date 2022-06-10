import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//components
import ImageSlider from '../components/ImageSlider'
import StarRating from '../components/StarRating'

// images
import accessoriesImg from "../assets/images/accessories-img.jpg"
import fashionImg from "../assets/images/fashion-img.jpg"
import bannerImg from "../assets/images/banner-img.jpg"
// misc
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useProductsContext } from '../context/products_context'

import InfoBoxes from '../components/InfoBoxes'
import CollectionShowcase from '../components/CollectionShowcase'






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



    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.section`
--info-boxes-width:55vw;




`