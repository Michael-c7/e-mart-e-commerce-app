import React from 'react'
import styled from 'styled-components'
import AboutUsImg from '../assets/images/about-us-img.jpg'

import {FaHandshake} from 'react-icons/fa';
import {
  MdLocalShipping,
  MdBorderColor,
  MdOutlineSupportAgent,
  MdOutlineSavings} from 'react-icons/md'
// import {}




const AboutPage = () => {

  return (
    <Wrapper>
      <div className='about-us'>
        <img className='about-us__img' src={AboutUsImg} alt='clothes on a clothes hanger'/>
        <div className='about-us__info'>
            <h1 className='about-us__heading'>About Us</h1>
            <p className='about-us__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
            </p>
        </div>
      </div>


      {/* <div className='why-shop-with-us'>
        <h2 className='why-shop-with-us__heading'>Why Shop With Us?</h2>
        <ul className='why-shop-with-us__items'>
          <li className='why-shop-with-us__item'>
            <div className='why-shop-with-us__item__icon'>
              <FaHandshake/>
            </div>
            <p className='why-shop-with-us__item__text'>Complete buyer supply store</p>
          </li>

          <li className='why-shop-with-us__item'>
            <div className='why-shop-with-us__item__icon'>
              <MdBorderColor/>
            </div>
            <p className='why-shop-with-us__item__text'>Same day dispatch on all orders</p>
          </li>

          <li className='why-shop-with-us__item'>
            <div className='why-shop-with-us__item__icon'>
              <MdLocalShipping/>
            </div>
            <p className='why-shop-with-us__item__text'>Free delivery on all orders</p>
          </li>

          <li className='why-shop-with-us__item'>
            <div className='why-shop-with-us__item__icon'>
              <MdOutlineSupportAgent/>
            </div>
            <p className='why-shop-with-us__item__text'>Professional advice and great support</p>
          </li>

          <li className='why-shop-with-us__item'>
            <div className='why-shop-with-us__item__icon'>
              <MdOutlineSavings/>
            </div>
            <p className='why-shop-with-us__item__text'>Fall savings are in the air</p>
          </li>
        </ul>
      </div> */}




      {/* <div className='sale-facts'>
        <ul className='sale-facts__items'>
          <li className='sale-facts__item'>
            <h2 className='sale-facts__item__fact'>
              <div className='sale-facts__item__fact__number'>90%</div>
              <div className='sale-facts__item__fact__text'>Of excellent reviews</div>
            </h2>
            <p className='sale-facts__item__text'>
            Nor again is there anyone who loves or pursues
            or desires to obtain pain of itself,
            because it is pain,
            but because occasionally in which
            toil and pain can procure
            </p>
          </li>
          <li className='sale-facts__item'>
            <h2 className='sale-facts__item__fact'>
              <div className='sale-facts__item__fact__number'>1545</div>
              <div className='sale-facts__item__fact__text'>More sales</div>
            </h2>
            <p className='sale-facts__item__text'>
            Nor again is there anyone who loves or pursues
            or desires to obtain pain of itself,
            because it is pain,
            but because occasionally in which
            toil and pain can procure
            </p>
          </li>
          <li className='sale-facts__item'>
            <h2 className='sale-facts__item__fact'>
              <div className='sale-facts__item__fact__number'>100%</div>
              <div className='sale-facts__item__fact__text'>Happy customers</div>
            </h2>
            <p className='sale-facts__item__text'>
            Nor again is there anyone who loves or pursues
            or desires to obtain pain of itself,
            because it is pain,
            but because occasionally in which
            toil and pain can procure
            </p>
          </li>
        </ul>
      </div> */}
    </Wrapper>
  )
}

export default AboutPage

const Wrapper = styled.section`
   .about-us__text {
    max-width:60ch;
    line-height:2;
   }

   .about-us {
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:2rem;
    // background:#F0F0F0;
    height:auto;
    padding:2rem var(--general-spacing);
   }

   .about-us__img {
    max-width:100%;
    height:100%;
    object-fit:cover;
   }















// mobile view
   @media screen and (max-width: 1024px) {
    .about-us {
      display:grid;
      grid-template-rows:1fr 1fr;
      grid-gap:2rem;
      background:#F0F0F0;
      height:auto;
      padding:var(--site-spacing);
      padding-top:2rem;
     }
   }
`