import React from 'react'
import styled from 'styled-components'
//components
import ImageSlider from '../components/ImageSlider'

// images
import accessoriesImg from "../assets/images/accessories-img.jpg"
import fashionImg from "../assets/images/fashion-img.jpg"
import bannerImg from "../assets/images/banner-img.jpg"
import { Link } from 'react-router-dom'
import axios from 'axios'











const HomePage = () => {
  const url = "/api/products"

  

  const [products, setProducts] = React.useState([])

  const [womensProducts, setWomensProducts] = React.useState([])
  const [mensProduct, setMensProduct] = React.useState([])
  const [accessoryProduct, setaccessoryProduct] = React.useState([])

  const fetchData = async () => {
      try {
          const { data } = await axios.get(url)
          setProducts(data)
      } catch(error) {

      }
  }

  /**
   * 
   * @param {string} tagsToFilterBy eg: ["women"] or ["women","female","men","male"]
   */
  const filterProductByTag = (tagsToFilterBy) => {
    let filteredProducts = products.filter((product) => {
      if(product?.fields?.tags.includes(tagsToFilterBy[0]) 
      && product?.fields?.tags.includes(tagsToFilterBy[1])) {
        return product;
      }
    })
    return filteredProducts;
  }

  React.useEffect(() => {
      fetchData()
  }, [])

  React.useEffect(() => {
    const productAmountForShowcase = 4;
    setWomensProducts(filterProductByTag(["women", "female"]).slice(0,productAmountForShowcase))
    setMensProduct(filterProductByTag(["male", "men"]).slice(0,productAmountForShowcase))

  }, [products])


  React.useEffect(() => {
    console.log(womensProducts)
  }, [womensProducts])
  

  return (
    <Wrapper>
      <ImageSlider/>

      <section className='info-boxes'>
        <Link className='info-box' to='/products'>
            <div className='info-box__details'>
              <h2 className='info-box__heading'>Accessories</h2>
              <h3 className='info-box__sub-heading'>The Best Look Anywhere</h3>
            </div>
            <div className='info-box__img-container'>
              <div className='info-box__img info-box__img-1'></div>
            </div>
        </Link>
        <Link className='info-box' to='/products'>
            <div className='info-box__details'>
              <h2 className='info-box__heading'>Fashion</h2>
              <h3 className='info-box__sub-heading'>Live According to Fashion</h3>
            </div>
            <div className='info-box__img-container'>
              <div className='info-box__img info-box__img-2'></div>
            </div>
        </Link>
      </section>


      <section className='collection'>
        <h2 className='collection__heading'>Collections</h2>
        <ul className='collection__categories'>
          <li className='collection__category'>Women</li>
          <li className='collection__category'>Men</li>
          <li className='collection__category'>Accessories</li>
        </ul>
        <div className='collection__cards-all'>
        {/* <ul className='collection__cards'>
          <li className='collection__card'>
            <div className='info-box__img-container'>
              <div className='info-box__img info-box__img-1'></div>
            </div>
            <div className='collection__card__stars'></div>
              <h4 className='collection__card__brand'>brand here</h4>
              <h2 className='collection__card__brand'>product title here</h2>
              <div className='collection__card__info'>
                <h2 className='collection__card__price'>price here</h2>
                <button className='collection__card-add-to-cart-btn'>ADD TO CART</button>
            </div>
          </li>
        </ul> */}
        </div>
      </section>

    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.section`
h3 {
  padding: 0px;
  margin: 0px;
}

.info-boxes {
  position:relative;
  // background:red;
  width:70vw;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:2rem auto 5rem auto;
}


.info-box {
  position:relative;
  margin:0 0.5rem;

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
  width:500px;
  height:500px;
  overflow: hidden;
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




















.collection {
  // background:red;
  width:70vw;
  margin:2rem auto 5rem auto;
}

.collection__heading {
  font-size:2rem;
  text-align:center;
}

.collection__categories {
  display:flex;
  justify-content:center;
  align-items:center;

  font-size:1.5rem;
  margin-bottom:1rem;
}

.collection__category {
  margin:0 1rem;
  transition:all 0.1s ease;
  color:#666;
}

.collection__category:hover {
  cursor:pointer;
  color:#000;
  transition:all 0.1s ease;
}

.collection__category--current {
  color:#000;
}

`