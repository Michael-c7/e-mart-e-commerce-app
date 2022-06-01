import React from 'react'
import styled from 'styled-components'
import { GrPrevious, GrNext } from "react-icons/gr"

// images
import sliderImg1 from "../assets/images/slider-img-1.jpg"
import sliderImg2 from "../assets/images/slider-img-2.jpg"
import sliderImg3 from "../assets/images/slider-img-3.jpg"
import fashionImg from "../assets/images/fashion-img.jpg"
import accessoriesImg from "../assets/images/accessories-img.jpg"
import bannerImg from "../assets/images/banner-img.jpg"


const slideInfoData = [
  {
    heading:"Best Prices of the year",
    subHeading:"Hot deals to kick off the season",
    /*first word is the up / down second word is the left right*/
    headingPosition:"center-right",
    img:sliderImg1,
  },
  {
    heading:"Must have Deals",
    subHeading:"Creative, Flexible and stylish options for all sizes",
    /*first word is the up / down second word is the left right*/
    headingPosition:"center-left",
    img:sliderImg2,

  },
  {
    heading:"Live life in comfort",
    subHeading:"",
    /*first word is the up / down second word is the left right*/
    headingPosition:"center-center",
    img:sliderImg3,
  },
]

const HomePage = () => {
  return (
    <Wrapper>
      <div className='slider-container'>
        <ul className='slides'>
          <li className='slide'>
            <img className='slide-img' src={sliderImg1} alt=""/>
          </li>

          <li className='slide'>
            <img className='slide-img' src={sliderImg2} alt=""/>
          </li>

          <li className='slide'>
            <img className='slide-img' src={sliderImg3} alt=""/>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.section`
  .slider-container {
    background:red;
    position:relative;
    max-width:100%;
    height:80vh;
  }

  .slide {
    position:absolute;
    width:100%;
    height:100%;
  }

  .slide-img {
    width:100%;
    height:100%;
    object-fit:cover;
  }

`