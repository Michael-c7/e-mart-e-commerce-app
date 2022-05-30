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
      <ul className="slides">
          {slideInfoData.map((slideInfo, index) => {
            return (
              <>
                <input type="radio" name="radio-btn" id={`img-${index}`} checked />
                <li className="slide-container">
                  <div className={`slide slide-${index}`}>
                    <div className={`slide__headings slider__heading--${slideInfo.headingPosition}`}>
                      {slideInfo?.heading && <h2 className="slide__heading">{slideInfo?.heading}</h2>}
                      {slideInfo?.subHeading && <h3 className="slide__sub-heading">{slideInfo?.subHeading}</h3>}
                      <button className="slide__shop-now-btn">Shop Now</button>
                    </div>
                    <img src={slideInfo.img} alt="" />
                  </div>
                  <div className="nav">
                    {/*finished the logic for if its the last or first index */}
                    <label for={`img-${index === 0 ? index + slideInfoData.length - 1 : index - 1}`} className="prev">
                      <GrPrevious className="nav__icon"/>
                    </label>
                    <label for={`img-${index === slideInfoData.length - 1 ? index - slideInfoData.length + 1 : index + 1}`} className="next">
                      <GrNext className="nav__icon"/>
                    </label>
                  </div>
                </li>
              </>
            )
          })}
          <li className="nav-dots">
            {slideInfoData.map((_, index) => {
              return (
                <label for={`img-${index}`} className="nav-dot" id={`img-dot-${index}`}></label>
              )
            })}
          </li>
      </ul>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.section`
  .slides {
    padding: 0;
    width: 100%;
    height: 80vh;
    display: block;
    margin: 0 auto;
    position: relative;
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

.slides input { display: none; }

.slide-container { display: block; }


.slide__headings {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  color:#000;
  background:red;
}


.slide__heading {
  font-size:42px;
}


.slide__sub-heading {
  font-size:22px;
  color:var(--clr-grey-2);
  font-weight:500;
  text-align:center;
}

.slide__shop-now-btn {
  border:none;
  background:var(--main-color);
  color:#fff;
  border-radius:2px;
  font-size:18px;
  padding:0.75rem 1.25rem;
  transition:all ease 0.4s;

  margin-top:2rem;
  position:relative;
  left:50%;
  transform:translateY(-50%);
}

.slide__shop-now-btn:hover {
  background:#000;
  transition:all ease 0.4s;
  cursor:pointer;
}


.slider__heading--center-right {
  top:50%;
  left:75%;
  transform:translate(-75%, -50%);
}

.slider__heading--center-left {
  top:50%;
  left:25%;
  transform:translate(-25%, -50%);
}

.slider__heading--center-center {
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}



.slide {
    top: 0;
    opacity: 0;
    width: 100%;
    height: 80vh;
    display: block;
    position: absolute;
    transition: all .7s ease-in-out;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit:cover;
}

.nav label {
    width: 75px;
    height: 100%;
    display: none;
    position: absolute;

	  opacity: 0;
    z-index: 9;
    cursor: pointer;

    transition: opacity .2s;
}

.nav__icon {
  position:absolute;
  font-size:2rem;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);

}

// .nav__icon:hover {
//   background:green;
//   color:red;
// }


.slide:hover + .nav label { opacity: 0.5; }

.nav label:hover { opacity: 1; }

.nav .next { right: 0; }

input:checked + .slide-container  .slide {
    opacity: 1;

    transform: scale(1);

    transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .nav label { display: block; }

.nav-dots {
	width: 100%;
	bottom: 9px;
	height: 11px;
	display: block;
	position: absolute;
	text-align: center;
}

.nav-dots .nav-dot {
	top: -5px;
	width: 11px;
	height: 11px;
	margin: 0 4px;
	position: relative;
	border-radius: 100%;
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.6);
}

.nav-dots .nav-dot:hover {
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.8);
}

input#img-1:checked ~ .nav-dots label#img-dot-1,
input#img-2:checked ~ .nav-dots label#img-dot-2,
input#img-3:checked ~ .nav-dots label#img-dot-3,
input#img-4:checked ~ .nav-dots label#img-dot-4,
input#img-5:checked ~ .nav-dots label#img-dot-5,
input#img-6:checked ~ .nav-dots label#img-dot-6 {
	background: rgba(0, 0, 0, 0.8);
}
`