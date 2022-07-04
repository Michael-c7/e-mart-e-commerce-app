import React from 'react'
import styled from 'styled-components'
import { GrPrevious, GrNext } from "react-icons/gr"

// images
import sliderImg1 from "../assets/images/slider-img-1.jpg"
import sliderImg2 from "../assets/images/slider-img-2.jpg"
import sliderImg3 from "../assets/images/slider-img-3.jpg"
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
    subHeading:"Save on new arrivals from your fave brands",
    /*first word is the up / down positioning second word is the left / right positioning*/
    slideInfoPosition:"center-left",
    img:sliderImg2,

  },
  {
    heading:"Live life in comfort",
    subHeading:"Creative, Flexible and stylish options for all sizes",
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
        const slideChangeTimeInMilliseconds = 25000;

        setInterval(() => {
        nextSlide()
        }, slideChangeTimeInMilliseconds)
    }

    React.useEffect(() => {

        if (!window.matchMedia("(max-width: 768px)").matches) {    
          autoSlideChange()
        } else {
          
        }
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
              return <li className={`nav-dot nav-dot--${index} ${currentSliderIndex === index ? "nav-dot--current nav-dot--current--" : ""} ${currentSliderIndex === index && "nav-dot--current--"}${index}`} onClick={() => setCurrentSliderIndex(index)}  key={index}></li>
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

  .slide-0 { }
  .slide-1 { }
  .slide-2 { }

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
    animation-delay:1.5s;
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
    margin:1.5rem auto 2.5rem auto;
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
    // background:rgba(250,250,250,0.25);
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
















// desktop version above 1920
@media only screen and (min-width:2560px) {
  .slide__info {
    width:75rem;
  }

  .slide__heading {
    font-size:5rem;
  }

  .slide__sub-heading {
    margin:1.5rem auto 3.5rem auto;
    font-size:2rem;
  }

  .slide__shop-now-btn {
    font-size:26px;
    line-height:16px;
    padding:15px 30px;
  }

  .movement-btn {
    font-size:3rem;
  }

  .nav-dots {
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:rgb(150,150,150,0.25);
    border-radius:3rem;
    padding:2rem 2rem;
    width:15rem;
    height:2rem;
  }

  .nav-dot {
    --dot-size:10px;
    width:var(--dot-size);
    height:var(--dot-size);
    margin-right:10px;
  }


  .nav-dot--current {
    --dot-size:20px;
    width:var(--dot-size);
    height:var(--dot-size);
  }

  .nav-dot--current::after {
    --dot-size:25px;
    width:var(--dot-size);
    height:var(--dot-size);
    border:var(--main-color) 2px solid;
    top:-2px;
    left:-0px;
  }

  .nav-dot {
    left:-0px;
  }
}


// mobile version
  @media only screen and (max-width:1600px) {
    .slide__info {
      width:35rem;
    }

    .slide__heading {
      font-size:3.25rem;
    }

    .slide__sub-heading {
      margin:1.5rem auto 2.5rem auto;
      font-size:1.25rem;
    }

    .slide__shop-now-btn {
      font-size:13px;
      line-height:16px;
      padding:15px 30px;
    }

    .center-right {
      left:80%;
      top:50%;
      transform:translate(-80%, -50%);
    }
  
    .center-left {
      left:15%;
      top:50%;
      transform:translate(-15%, -50%);
    }
  }

  @media only screen and (max-width:1400px) {
    .slide__info {
      width:35rem;
    }

    .slide__heading {
      font-size:3rem;
    }

    .slide__sub-heading {
      margin:1.5rem auto 2.5rem auto;
      font-size:1.15rem;
    }

    .slide__shop-now-btn {
      font-size:12px;
      line-height:16px;
      padding:15px 30px;
    }

    .center-right {
      left:85%;
      top:50%;
      transform:translate(-85%, -50%);
    }
  
    .center-left {
      left:15%;
      top:50%;
      transform:translate(-15%, -50%);
    }
  }

  @media only screen and (max-width:1200px) {
    .slide__info {
      width:30rem;
    }

    .slide__heading {
      font-size:2rem;
    }

    .slide__sub-heading {
      margin:1.5rem auto 2.5rem auto;
      font-size:1rem;
    }

    .slide__shop-now-btn {
      font-size:12px;
      line-height:16px;
      padding:15px 30px;
    }

    .center-right {
      left:85%;
      top:50%;
      transform:translate(-85%, -50%);
    }
  
    .center-left {
      left:15%;
      top:50%;
      transform:translate(-15%, -50%);
    }
  }

  @media only screen and (max-width:940px) {
    .slide__info {
      width:27rem;
    }

    .slide__sub-heading {
      max-width:40ch;
      margin:1rem auto 2rem auto;
    }

    .center-right {
      left:95%;
      top:50%;
      transform:translate(-95%, -50%);
    }
  
    .center-left {
      left:10%;
      top:50%;
      transform:translate(-10%, -50%);
    }
  }

  @media only screen and (max-width:768px) {
    .slide__info {
      width:18rem;
    }

    .slide__heading {
      font-size:1.85rem;
    }

    .slide__sub-heading {
      font-size:0.95rem;
      max-width:30ch;
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
  }

  @media only screen and (max-width:575px) {
    .slide-0 .slide-img {
      object-position: 15% 50%;
    }

    .slide-1 .slide-img {
      object-position: 75% 50%;
    }
  
    .slide-2 .slide-img {
      object-position: 88% 50%;
    }

    .slide__info {
      width:90vw;
    }

    .slide__heading {
      font-size:2.25rem;
      background:#fff;
      border-radius:4px;
      width:auto;
      padding:0.5rem;
    }

    .slide__sub-heading {
      font-size:1.25rem;
      max-width:100%;
      background:#fff;
      border-radius:4px;
      padding:0.5rem;
      width:75vw;
      margin:1rem auto 1.75rem auto;
    }

    .slide__shop-now-btn {
      font-size:14px;
    }

    .center-right {
      left:50%;
      top:50%;
      transform:translate(-50%, -50%);
    }
  
    .center-left {
      left:50%;
      top:50%;
      transform:translate(-50%, -50%);
    }

    .movement-btns  {
      position:absolute;
      width:100%;
      display:flex;
      justify-content:center;
      top:100%;
      transform:translateY(-100%);
    }

    .prev-btn,
    .next-btn {
      background:var(--main-color);
      margin:0.5rem;
    }

    .prev-btn .prev-icon,
    .next-btn .next-icon {
      // filter acting like color:#fff would 
      filter:var(--white-color-filter);
    }

    .nav-dots-container {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

  }

  @media only screen and (max-width:365px) {
    .slide-0 .slide-img {
      object-position: 25% 50%;
    }

    .slide-1 .slide-img {
      object-position: 70% 50%;
    }
  
    .slide-2 .slide-img {
      object-position: 79% 50%;
    }

    .slide__heading {
      font-size:1.75rem;
    }

    .slide__sub-heading {
      font-size:1rem;
    }

    .slide__shop-now-btn {
      font-size:12px;
    }
  }

  @media only screen and (max-height:320px) {
    .slide__heading {
      margin-bottom:15px;
    }

    .slide__sub-heading {
      display:none;
    }
  }

`

export default ImageSlider