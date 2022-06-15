import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import StarRating from '../components/StarRating'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { filterProductsByTag } from '../utils/misc'



const ProductCards = () => {
    const {
        products,
      } = useProductsContext()

      const [productCollection, setProductCollection] = useState([])


    useEffect(() => {
        setProductCollection(products)


        console.log(products)
      }, [products])


      return (
        <Wrapper>
            <ul className='product__cards'>
                {products.map(({fields, id}, index) => {
                    return (
                        <li className='product__card' key={index}>
                            <Link to='/products'>
                                <div className='collection-card__img-container'>
                                <img className='collection-card__img' src={fields?.images[0].url} alt=''/>
                                </div>
                            </Link>
                            <StarRating className='collection__card__stars' rating={fields?.Rating}/>
                            <h4 className='collection__card__brand'>{fields?.brand}</h4>
                            <h2 className='collection__card__name'>{fields?.Name}</h2>
                            <h2 className='collection__card__price'>${fields?.price}</h2>
                            <button className='standard-button collection__card-add-to-cart-btn'>ADD TO CART</button>
                        </li>
                    )
                })}
            </ul>
        </Wrapper>
      )
}

export default ProductCards

const Wrapper = styled.section`

h3 {
  padding:0px;
  margin:0px;
}


--card-amt:4;
width:100%;
flex-wrap:wrap;
flex-direction:column;
justify-content:space-between;
align-item:center;



.product__cards {
    position:relative;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:center;
}


.product__card {
    text-align:center;
    margin:0 1rem;

    --product-card-space:2rem;
    --product-card-amt:4;
    --product-card-width:100% / var(--product-card-amt);

    width:calc(var(--product-card-width) - var(--product-card-space));
}








.collection-card__img-container {
  --card-space:0.25rem;
  --card-spacing:calc(var(--card-amt) * var(--card-space));
  --card-width:calc(var(--standard-width) / var(--card-amt));
  --cardWidthAndCardSpacing:calc(var(--card-width) - var(--card-spacing));

  width:var(--cardWidthAndCardSpacing);
  height:350px;
  overflow:hidden;
}

.collection-card__img {
  width:100%;
  height:100%;
  transition:transform ease 0.5s;
  object-fit:cover;
  object-position:50% 50%;
}

.collection-card__img:hover { 
  transform: scale(1.05);
 }

.collection__card__brand {
  font-size:0.8rem;
  color:rgba(175,175,175,1);
  font-weight:400;
  letter-spacing:0.05rem;
}

.collection__card__name {
  font-size:1.05rem;
  font-weight:400;
}

.collection__card__price {
  font-size:0.95rem;
  font-weight:400;
  opacity:1;
  transform:translateY(0);
  transition:transform:0.2s ease;
}

.collection__card-add-to-cart-btn {
  margin:0 auto 3.5rem auto;
}






// mobile view
@media only screen and (max-width:1024px) {
    .collection-cards {
        --card-amt:3;
    }

    .collection-card {
        margin-top:1rem;
      }
  }

  @media only screen and (max-width:768px) {
    .collection-cards {
        --card-amt:2;
    }
  }


  @media only screen and (max-width:425px) {
    /*
    does not mean there is only 1 info-box,
    this means to divide by 1 to get the full width w/ flex-direction:column;  
    */  
    display:flex;
    flex-direction:column;
  
    .collection-cards {
        --card-amt:1;
    }
}


`