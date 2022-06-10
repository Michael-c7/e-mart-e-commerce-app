import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import accessoriesImg from "../assets/images/accessories-img.jpg"
import fashionImg from "../assets/images/fashion-img.jpg"

const InfoBoxes = () => {
  return (
    <Wrapper>
      <Link className='info-box' to='/products'>
          <div className='info-box__details'>
            <h2 className='info-box__heading'>Accessories</h2>
            <h3 className='info-box__sub-heading'>The Best Looks Anywhere</h3>
          </div>
          <div className='info-box__img-container'>
            <div className='info-box__img info-box__img-1'></div>
          </div>
      </Link>
      <Link className='info-box' to='/products'>
          <div className='info-box__details'>
            <h2 className='info-box__heading'>Fashion</h2>
            <h3 className='info-box__sub-heading'>Live Life Your Way</h3>
          </div>
          <div className='info-box__img-container'>
            <div className='info-box__img info-box__img-2'></div>
          </div>
      </Link>
  </Wrapper>
  )
}

export default InfoBoxes

const Wrapper = styled.section`
h3 {
  padding: 0px;
  margin: 0px;
}


  --info-boxes-width:55vw;
  --amt-of-info-box:2;
  position:relative;
  width:var(--info-boxes-width);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:2rem auto 5rem auto;


.info-box {
  position:relative;
  margin:0 1rem;
}

.info-box__details {
  position:absolute;
  color:#000;
  background:rgba(250,250,250,0.9);
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  z-index:20;
  padding:0.5rem 0.75rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}


.info-box__heading {
  font-size:1.15rem;
}

.info-box__sub-heading {
  font-size:0.85rem;
  font-weight:400;
  color:#8d92a3;
}


.info-box__img-container {
  width:calc(var(--info-boxes-width) / var(--amt-of-info-box));
  height:500px;
  overflow:hidden;
}
 
.info-box__img {
  width:100%;
  height:100%;
  background-position:center;
  background-size:cover;
  transition:transform ease 0.5s;
}

.info-box__img-1 {
  background-image:url("${accessoriesImg}");
}

.info-box__img-2 {
  background-image:url("${fashionImg}");
  background-position: 50% 25%; 

}
 
.info-box__img:hover { 
  transform: scale(1.05);
 }
 

 @media only screen and (max-width:1024px) {
    --info-boxes-width:70vw;
  }

  @media only screen and (max-width:768px) {
    --info-boxes-width:100vw;
  }

  @media only screen and (max-width:425px) {
      /*
      --amt-of-info-box:1; 
      does not mean there is only 1 info-box,
      this means to divide by 1 to get the full width w/ flex-direction:column;  
      */  
      --amt-of-info-box:1;
      display:flex;
      flex-direction:column;
    

    .info-box {
      margin:1rem 0;
    }
  }
`