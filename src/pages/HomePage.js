import React from 'react'
import styled from 'styled-components'
import { GrPrevious, GrNext} from "react-icons/gr"

// images
import sliderImg1 from "../assets/images/slider-img-1.jpg"
import sliderImg2 from "../assets/images/slider-img-2.jpg"
import sliderImg3 from "../assets/images/slider-img-3.jpg"
import fashionImg from "../assets/images/fashion-img.jpg"
import accessoriesImg from "../assets/images/accessories-img.jpg"
import bannerImg from "../assets/images/banner-img.jpg"


const slideInfoData = [
  {
    heading:"Best Prices this year",
    subHeading:"Hot deals to kick off the season",
    img:sliderImg1,
  },
  {
    heading:"Must have Deals",
    subHeading:"Creative, Flexible and stylish options for all sizes",
    img:sliderImg2,

  },
  {
    heading:"Live life in comfort",
    subHeading:"",
    img:sliderImg3,
  },
]

const HomePage = () => {
  return (
    <Wrapper>
      <section className="img-slider-container">
        <div className="img-slider">
          <button className="img-slider__prev-img"><GrPrevious/></button>
          <ul className="img-slider__slides">
            {slideInfoData.map((slideInfo) => {
              return (
                <li className="img-slider__slide">
                  <div className="slider__info">
                    {slideInfo?.heading && <h2 className="slider__heading">{slideInfo?.heading}</h2>}
                    {slideInfo?.subHeading && <h3 className="slider__sub-heading">{slideInfo?.subHeading}</h3>}
                    <button className="slider__shop-now-btn">SHOW NOW</button>
                  </div>
                  <img className="slider__img" src={slideInfo?.img} alt="slide img"/>
                </li> 
              )
            })}
          </ul>
          <button className="img-slider__next-img"><GrNext/></button>

        </div>

        <div className="img-slider__dots-container">
            <ul className="img-slider__dots">
              {slideInfoData.map(_ => {
                return (
                  <li className="img-slider__dot">
                    <button>dot here</button>
                  </li>
                )
              })}
            </ul>
        </div>
      </section>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.section`
  .img-test {
    width:100%;
    height:80vh;
    object-fit:cover;
  }
`