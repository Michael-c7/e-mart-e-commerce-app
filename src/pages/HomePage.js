import React from 'react'
import styled from 'styled-components'
//components
import ImageSlider from '../components/ImageSlider'

// images
import fashionImg from "../assets/images/fashion-img.jpg"
import accessoriesImg from "../assets/images/accessories-img.jpg"
import bannerImg from "../assets/images/banner-img.jpg"
import { Link } from 'react-router-dom'











const HomePage = () => {

  

  return (
    <Wrapper>
      <ImageSlider/>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.section`

`