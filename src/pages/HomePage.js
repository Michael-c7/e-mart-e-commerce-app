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
    /*first word is the up / down positioning second word is the left / right positioning*/
    headingPosition:"center-right",
    img:sliderImg1,
  },
  {
    heading:"Must have Deals",
    subHeading:"Creative, Flexible and stylish options for all sizes",
    /*first word is the up / down positioning second word is the left / right positioning*/
    headingPosition:"center-left",
    img:sliderImg2,

  },
  {
    heading:"Live life in comfort",
    subHeading:"",
    /*first word is the up / down positioning second word is the left / right positioning*/
    headingPosition:"center-center",
    img:sliderImg3,
  },
]










const HomePage = () => {
  const [currentSliderIndex, setCurrentSliderIndex] = React.useState(0)

  const prevSlide = () => {
    if(currentSliderIndex === 0) {
      setCurrentSliderIndex(slideInfoData?.length - 1)
    } else {
      setCurrentSliderIndex(currentSliderIndex - 1)
    }
  }

  const nextSlide = () => {
    if(currentSliderIndex === slideInfoData?.length - 1) {
      setCurrentSliderIndex(0)
    } else {
      setCurrentSliderIndex(currentSliderIndex + 1)
    }
  }
  

  return (
    <Wrapper>
      <div className='slider-container'>
        <ul className='slides'>
          {slideInfoData.map((data, index) => {
            const { 
              heading,
              subHeading,
              headingPosition,
              img,
            } = data;
            return (
              <li className={`slide slide-${index}  ${currentSliderIndex === index ? 'slide__current' : ''}`}>
                <img className='slide-img' src={img} alt=""/>
                <div className={`slide__info ${headingPosition}`}>
                  <h2 className='slide__heading'>{heading}</h2>
                  <h3 className='slide__sub-heading'>{subHeading}</h3>
                  <button className='slide__shop-now-btn'>Shop now</button>
                </div>
              </li>
            )
          })}
        </ul>

        <div className='movement-btns'>
          <button className='movement-btn prev-btn' onClick={prevSlide}>
            <GrPrevious className='prev-icon'/>
          </button>
          <button className='movement-btn next-btn' onClick={nextSlide}>
            <GrNext className='next-icon'/>
          </button>
        </div>


        <div className='nav-dots-container'>
          <ul className='nav-dots'>
            {slideInfoData.map((_, index) => {
              return <li className={`nav-dot ${currentSliderIndex === index ? "nav-dot--current" : ""}`} onClick={() => setCurrentSliderIndex(index)}></li>
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.section`
  .slider-container {
    position:relative;
    max-width:100%;
    height:80vh;
  }

  .slide {
    position:absolute;
    width:100%;
    height:100%;
    opacity:0;
    transition:opacity 0.5s ease;
  }

// first slide is slide 0
  .slide-0 {

  }

  .slide-0 h3 {
    width:20ch;
    margin: 0 auto 0.75rem auto;
    text-align:center;
  }

  .slide-1 {

  }

  .slide-1 h3 {
    width:30ch;
  }

  .slide-2 {
    color:#fff;
  }

  

  .slide-2 .slide__heading {
    background:#222;
    padding:1rem 0.5rem;
  }


  .slide__current {
    opacity:1;
  }


  .slide-img {
    position:relative;
    width:100%;
    height:100%;
    object-fit:cover;
  }


  .slide__info {
    position:absolute;
    top:0;
    text-align:center;
  }

  .center-right {
    top:50%;
    left:75%;
    transform:translate(-50%, -75%);
  }

  .center-left {
    top:50%;
    left:25%;
    transform:translate(-50%, -25%);
  }

  .center-center {
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
  }


  .slide__shop-now-btn {
    position:relative;
    border:none;
    background:var(--main-color);
    color:#fff;
    font-size:1rem;
    font-weight:400;
    text-transform:uppercase;
    padding:1rem 1.25rem;
    border-radius:0.25rem;
    transition:all 0.25s ease;
  }

  .slide__shop-now-btn:hover {
    background:#222;
    transition:all 0.25s ease;
    cursor:pointer;
  }


  .movement-btns {
    position:absolute;
    width:100%;
    display:flex;
    justify-content:space-between;
    top:50%;
    transform:translateY(-50%);
  }

  .movement-btn {
    border:none;
    background:none;
    font-size:1.25rem;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0.85rem;
    border-radius:100px;
    z-index:10;
  }

  .movement-btn:hover {
    cursor:pointer;
  }

  .prev-btn {
    margin-left:1rem;
  }

  .next-btn {
    margin-right:1rem;
  }

  .prev-btn:hover,
  .next-btn:hover {
    background:var(--main-color);
  }

  .prev-btn:focus,
  .next-btn:focus {
    background:var(--main-color);
    outline:2px solid #fff;
  }

  .prev-btn:hover .prev-icon,
  .prev-btn:focus .prev-icon {
    filter:var(--white-color-filter);
  }


  .next-btn:hover .next-icon,
  .next-btn:focus .next-icon {
    filter:var(--white-color-filter);
  }
  
  .prev-btn .prev-icon {
    position:relative;
    right:2px;
  }

  .next-btn .next-icon {
    position:relative;
    left:2px;
  }


  .nav-dots-container {
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    top:97%;
    transform:translateY(-97%);
    z-index:10;
  }

  .nav-dots {
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:rgba(200,200,200,0.6);
    border-radius:1rem;
    padding:1rem;
    width:6rem;
    height:2rem;
  }

  .nav-dot {
    --dot-size:5px;
    // margin:0 0.5rem;
    width:var(--dot-size);
    height:var(--dot-size);
    background:#000;
    border-radius:100%;
    cursor:pointer;
    
  }


  .nav-dot--current {
    position:relative;
    --dot-size:5px;
    width:var(--dot-size);
    height:var(--dot-size);
    background:none;
  }

  .nav-dot--current::after {
    --dot-size:15px;
    content:"";
    position:absolute;
    width:var(--dot-size);
    height:var(--dot-size);
    border-radius:100px;
    background:none;
    border:var(--main-color) 2px solid;
    // dot-size / 3 for top & left eg: 15/3=5 therefore top:-5px; left:-5px;
    top:-5px;
    left:-5px;
  }


`