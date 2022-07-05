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
      <div className='banner-img-container'>
        <img className='banner-img' src={bannerImg} alt=''/>
      </div>

      <div className='banner__info'>
        <h2 className='banner__heading'>The Best Trends of {currentSeasonNorthernHemisphere} {getCurrentYear}</h2>
        <h3 className='banner__sub-heading'>Get the look that matches the season</h3>
        <Link className='standard-button banner__shop-now-btn' to="/products">buy now</Link>
      </div>
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.section`

// bg
position:relative;
background-color:#F8F8F8;
width:var(--standard-width);
height:500px;
margin:2rem auto;
overflow:hidden;

.banner-img-container {
  position:absolute
  background:red;
  width:100%;
  height:100%;
}

.banner-img {
  position:relative;
  width:auto;
  height:auto;
  transition:transform 0.5s ease;
  transform:scale(1.35);
  left:175px;
  top:50px;
}

:hover .banner-img {
  transform:scale(1.40);
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


// smaller versions
@media only screen and (max-width:1440px) {
  .banner__info {
    width:30vw;
    position:absolute;
    text-align:center;
    left:95%;
    top:50%;
    transform:translate(-95%, -50%);
  }

  .banner-img {
    position:relative;
    width:auto;
    height:auto;
    transition:transform 0.5s ease;
    transform:scale(1.25);
    left:50px;
    top:50px;
  }

  :hover .banner-img {
    transform:scale(1.35);
  }
}


@media only screen and (max-width:1024px) {
  .banner__info {
    width:30vw;
    position:absolute;
    text-align:center;
    left:85%;
    top:50%;
    transform:translate(-85%, -50%);
  }

  .banner__heading {
    font-size:2rem;
    font-weight:500;
    margin:0 auto;
    max-width:15ch;

  }

  .banner__sub-heading {
    max-width:25ch;

    font-size:1rem;
    font-weight:400;
    color:grey;
    margin:1rem auto 2.5rem auto;
  }

  .banner-img {
    position:relative;
    width:auto;
    height:auto;
    transition:transform 0.5s ease;
    transform:scale(1.25);
    left:-20px;
    top:50px;
  }

  :hover .banner-img {
    transform:scale(1.35);
  }
}


@media only screen and (max-width:768px) {
  .banner__info {
    width:50vw;
    position:absolute;
    text-align:center;
    left:85%;
    top:50%;
    transform:translate(-85%, -50%);
  }
}


@media only screen and (max-width:610px) {
  .banner__info {
    width:50vw;
    position:absolute;
    text-align:center;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
  }

  .banner__heading {
    font-size:2rem;
    font-weight:500;
    margin:0 auto;
    max-width:20ch;
    background:#fff;
    padding:0.5rem;
    border-radius:4px;
  }

  .banner__sub-heading {
    max-width:25ch;

    font-size:1rem;
    font-weight:400;
    color:grey;
    margin:1rem auto 2.5rem auto;

    background:#fff;
    padding:0.5rem;
    border-radius:4px;
  }

  .banner-img {
    position:relative;
    width:auto;
    height:auto;
    transition:transform 0.5s ease;
    transform:scale(1.25) translateX(-15%);
    left:15%;
    top:50px;
  }

  :hover .banner-img {
    transform:scale(1.25);
  }

}


@media only screen and (max-width:425px) {
  .banner__info {
    width:100vw;
    position:absolute;
    text-align:center;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
  }


  .banner-img {
    position:absolute;
    width:auto;
    height:auto;
    transform: scale(1.25) translate(-0%, -50%);
    left:0%;
    top:50px;
  }

  :hover .banner-img {
    transform:scale(1.25);
  }
}


@media only screen and (max-width:375px) {
  .banner-img {
    transform: scale(1.25) translateX(-5%);
    left:5%;
    top:50px;
  }

  :hover .banner-img {
    transform:scale(1.25);
  }
}


@media only screen and (max-width:375px) {
  .banner-img {
    transform: scale(1.25) translateX(-10%);
    left:10%;
    top:50px;
  }
}

`