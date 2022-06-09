import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//components
import ImageSlider from '../components/ImageSlider'

// images
import accessoriesImg from "../assets/images/accessories-img.jpg"
import fashionImg from "../assets/images/fashion-img.jpg"
import bannerImg from "../assets/images/banner-img.jpg"
// misc
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useProductsContext } from '../context/products_context'










const HomePage = () => {
  const {
    sidebarOpen,
    products,
    productsLoading,
    productsError,
  } = useProductsContext()


  // const [womensProductCollection, setWomensProductCollection] = useState([])
  // const [mensProductCollection, setMensProductCollection] = useState([])
  // const [accessoriesProductCollection, setAccessoriesProductCollection] = useState([])

  const [collectionsMasterArray, setCollectionsMasterArray] = useState([])


  /**
   * 
   * @param {array} products - the products, an array of objects
   * @param {string} tagToFilterBy the tag to filter by eg: "mens"
   * @returns - an array of objects(products)
   */
  const filterProductsByTag = (products, tagToFilterBy) => {
    let filteredProducts = products.filter((product) => {
      if(product?.fields?.tags.includes(tagToFilterBy)) {
        return product;
      }
    })
    return filteredProducts;
  }

  useEffect(() => {
    const productAmountForShowcase = 4;
    // set the collections master array
    setCollectionsMasterArray([
      {
        topic:"Women",
        productCollection:filterProductsByTag(products, "women").slice(0, productAmountForShowcase),
      },
      {
        topic:"Men",
        productCollection:filterProductsByTag(products, "men").slice(0, productAmountForShowcase),
      },
      {
        topic:"Accessories",
        productCollection:filterProductsByTag(products, "accessory").slice(0, productAmountForShowcase),
      },
    ])
  }, [products])


  

  return (
    <Wrapper>
      <ImageSlider/>

      <section className='info-boxes'>
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
      </section>


      <section className='collection'>
        <h2 className='collection__heading'>Collections</h2>
        <ul className='collection__categories'>
          {collectionsMasterArray.map(({topic}, index) => {
            return (
              <li className={`collection__category collection__category--${index}`} key={index}>
                {topic}
              </li>
            )
          })}
        </ul>
        <div className='collection__cards-all'>
          {collectionsMasterArray?.map(({ productCollection }, index) => {
            return (
              <ul className={`collection-cards collection-cards--${index}`} key={productCollection?.id}>
                {productCollection.map(({fields, id}, index) => {
                  return (
                    <li className='collection-card' key={fields?.id}>
                      {fields?.Name}
                    </li>
                  )
                })}
              </ul>
            )
          })}
          <div className='outer-test'>
            <img className='inner-img-test' src={bannerImg} alt=''/>
          </div>


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
  --info-boxes-width:55vw;
  --amt-of-info-box:2;
  position:relative;
  width:var(--info-boxes-width);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:2rem auto 5rem auto;
}

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
    .info-boxes {
      --info-boxes-width:70vw;
    }
  }

  @media only screen and (max-width:768px) {
    .info-boxes {
      --info-boxes-width:100vw;
    }
  }

  @media only screen and (max-width:425px) {
    .info-boxes {
      /*
      --amt-of-info-box:1; not saying their is only 1 info-box,
      this means to divide by 1 to get the full width w/ flex-direction:column;  
      */  
      --amt-of-info-box:1;
      display:flex;
      flex-direction:column;
    }

    .info-box {
      margin:1rem 0;
    }
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


.collection-cards {
  margin:1rem 0;
}



.outer-test {
  width:500px;
  height:500px;
  overflow:hidden;
}

.inner-img-test {
  width:100%;
  height:100%;
  background-position:center;
  background-size:cover;
  transition:transform ease 0.5s;
  object-fit:cover;
}

.inner-img-test:hover { 
  transform: scale(1.05);
 }

`