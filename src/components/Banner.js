import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bannerImg from "../assets/images/banner-img.png"

const Banner = () => {
  const getCurrentYear = new Date().getFullYear();
  const getCurrentSeasonNum = d => Math.floor((d.getMonth() / 12 * 4)) % 4;

  /*
    How to know what hemisphere to choose
    ---
    if the equator is north or south of your position,
    Northern Hemisphere and Southern Hemisphere are divided by the equator.
    ---
    Location in northern hemisphere
      - all of North America and Europe
      - most of Asia, northern South America, and northern Africa
    ---
    Locations on southern hemisphere
      - australia
      - antarctica
      - most of South America, and southern Africa
    ---
  */
  const currentSeasonNorthernHemisphere = ['Winter', 'Spring', 'Summer', 'Autumn'][getCurrentSeasonNum(new Date())]
  const currentSeasonSouthernHemisphere = ['Summer', 'Autumn', 'Winter', 'Spring'][getCurrentSeasonNum(new Date())]




  return (
    <Wrapper>
      <img className='banner-img' src={bannerImg} alt=''/>

      <div className='banner__info'>
        <h2 className='banner__heading'>The Best Trends of {currentSeasonNorthernHemisphere} {getCurrentYear}</h2>
        <h3 className='banner__sub-heading'>subheading here</h3>
        <Link className='standard-button banner__shop-now-btn' to="/products">buy now</Link>
      </div>
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.section`
--banner-width:55vw;

// bg
position:relative;
background-color:#F8F8F8;
width:var(--banner-width);
height:500px;
margin:2rem auto;
overflow:hidden;

.banner-img {
  position:relative;
  width:auto;
  height:auto;
  transition:transform 0.2s ease;
  transform:scale(1.5);
  top:0px;
}

:hover .banner-img {
  transform:scale(1.55);

}




.banner__info {
  width:30vw;
  position:absolute;
  text-align:center;
  left:100%;
  top:50%;
  transform:translate(-100%, -50%);
}


.banner__heading {
  font-size:2rem;
  font-weight:500;
}

.banner__sub-heading {
  font-size:1rem;
  font-weight:400;
  color:grey;
  margin:1rem 0 2.5rem 0;
}




@media only screen and (max-width:768px) {
  --banner-width:100vw;
}


`