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
import { Link } from 'react-router-dom'


const slideInfoData = [
  {
    heading:"Best Prices this year",
    subHeading:"Hot deals to kick off the season",
    /*first word is the up / down positioning second word is the left / right positioning*/
    slideInfoPosition:"center-right",
    img:sliderImg1,
  },
  {
    heading:"Must have Deals",
    subHeading:"Creative, Flexible and stylish options for all sizes",
    /*first word is the up / down positioning second word is the left / right positioning*/
    slideInfoPosition:"center-left",
    img:sliderImg2,

  },
  {
    heading:"Live life in comfort",
    subHeading:"",
    /*first word is the up / down positioning second word is the left / right positioning*/
    slideInfoPosition:"center-left",
    img:sliderImg3,
  },
]

const ImageSlider = () => {
    let  [currentSliderIndex, setCurrentSliderIndex] = React.useState(0)

    const prevSlide = () => {
        if(currentSliderIndex === 0) {
        setCurrentSliderIndex(slideInfoData?.length - 1)
        } else {
        setCurrentSliderIndex(currentSliderIndex - 1)
        }
    }

    const nextSlide = () => {
        if(currentSliderIndex === slideInfoData?.length - 1) {
        setCurrentSliderIndex(currentSliderIndex = currentSliderIndex - currentSliderIndex)
        } else {
        setCurrentSliderIndex(currentSliderIndex = currentSliderIndex + 1)
        }
    }

    const autoSlideChange = _ => {
        // 10000 === 10 seconds
        const slideChangeTimeInMilliseconds = 15000;
        setInterval(() => {
        nextSlide()
        }, slideChangeTimeInMilliseconds)
    }

    React.useEffect(() => {
        autoSlideChange()
    }, [])


  return (
<Wrapper>
      <div className='slider-container'>
        <ul className='slides'>
          {slideInfoData.map((data, index) => {
            const { 
              heading,
              subHeading,
              slideInfoPosition,
              img,
            } = data;
            return (
              <li className={`slide slide-${index}  ${currentSliderIndex === index ? 'slide__current' : ''}`} key={index}>
                <div className={`slide__info ${slideInfoPosition} ${currentSliderIndex === index ? 'slide__info--intro-animation' : ''}`}>
                  <h2 className='slide__heading'>{heading}</h2>
                  <h3 className='slide__sub-heading'>{subHeading}</h3>
                  <Link className='slide__shop-now-btn' to="/products">Shop now</Link>
                </div>
                <img className='slide-img' src={img} alt=""/>
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
              return <li className={`nav-dot ${currentSliderIndex === index ? "nav-dot--current" : ""}`} onClick={() => setCurrentSliderIndex(index)}  key={index}></li>
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

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

  .slide-0 {

  }

  .slide-0 h3 {
    // width:20ch;
  }

  .slide-1 {

  }

  .slide-1 h3 {
    // width:30ch;
  }

  .slide-2 {
    // color:#fff;
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





  @keyframes appearAnimation {
    0%   {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @keyframes slideFromBottom {
    0%   {
        top:200px;
        opacity:0;

      }
    100% {
        top:0px;
        opacity:1;
      }
  }


  .slide__info {
    position:absolute;
    top:0;
    text-align:center;
    width:50rem;
    z-index:10;
  }

  .slide__info--intro-animation .slide__heading {
    animation-name:slideFromBottom;
    animation-duration:0.8s;
    animation-delay:0.5s;
    animation-fill-mode: forwards;
    opacity:0;
  }


  .slide__info--intro-animation .slide__sub-heading {
    animation-name:slideFromBottom;
    animation-duration:0.8s;
    animation-delay:0.6s;
    animation-fill-mode: forwards;
    opacity:0;
  }

  .slide__info--intro-animation .slide__shop-now-btn {
    animation-name:appearAnimation;
    animation-duration:1.25s;
    animation-delay:1.25s;
    animation-fill-mode: forwards;
    opacity:0;
  }


  .slide__heading {
    position:relative;
    font-weight:700;
    font-size:3.5rem;
    color:rgb(40, 40, 40);
    max-width:100%;
  }

  .slide__sub-heading {
    position:relative;
    color:rgb(50, 50, 50);
    font-weight:400;
    margin:2rem auto 2rem auto;
    font-size:1.5rem;
  }

  .center-right {
    left:80%;
    top:50%;
    transform:translate(-80%, -50%);
  }

  .center-left {
    left:20%;
    top:50%;
    transform:translate(-20%, -50%);
  }

  .center-center {
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
  }


  

  .slide__shop-now-btn {
    position:relative;
    border:none;
    background:var(--main-color);
    color:#fff;
    text-transform:uppercase;
    font-family:'Open Sans', sans-serif;
    font-size:14px;
    font-weight:600;
    line-height:16px;
    padding:15px 30px;
    white-space:nowrap;
    border-radius:4px;
    outline:none;
    transition:all 0.2s ease;
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
    z-index:50;
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
    z-index:20;
    transition:all 0.2s ease;
  }

  .movement-btn:hover {
    transition:all 0.2s ease;
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
    z-index:20;
  }

  .nav-dots {
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:rgb(150,150,150,0.25);
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


    // display: inline-block;     
    // position: relative;    
    // z-index: 1;     
    // padding: 2em;     
    // margin: -2em; 
    
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

export default ImageSlider