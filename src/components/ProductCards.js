import React from 'react'
import styled from 'styled-components'
import StarRating from '../components/StarRating'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
// import { filterProductsByTag } from '../utils/misc'
import Loading from '../components/Loading'






const ProductCards = (props) => {
  const { productsData } = props;

  const {
    products,
    productsLoading,
    productsError,
  } = useProductsContext()




      return (
        <Wrapper>
         {productsLoading ? <Loading/> : (
          <ul className='product-cards'>
            {productsData?.map((product, index) => {
              const {fields:productData, id:productId} = product;
              console.log(productData)
              return (
                <li className='product-card' key={productId}>
                  <Link to='/products'>
                    <div className='product-card__img-container'>
                      <img className='product-card__img' src={productData?.images[0].url} alt=''/>
                    </div>
                  </Link>
                  <StarRating className='product-card__stars' rating={productData?.Rating}/>
                  <h4 className='product-card__brand'>{productData?.brand}</h4>
                  <h2 className='product-card__name'>{productData?.Name}</h2>
                  <div className='product-card__info'>
                      <h2 className='product-card__price'>${productData?.price}</h2>
                      <button className='standard-button product-card-add-to-cart-btn'>ADD TO CART</button>
                  </div>
                </li>
              )
            })}
          </ul>
         )}
        </Wrapper>
      )
}

export default ProductCards

const Wrapper = styled.section`
h3 {
  padding:0px;
  margin:0px;
}

// width:var(--standard-width);






.product-cards {
  --card-amt:4;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-item:center;
}

.product-card {
  text-align:center;
  margin:1rem 0;
}



.product-card__img-container {
  --card-space:0.25rem;
  --card-spacing:calc(var(--card-amt) * var(--card-space));
  --card-width:calc(var(--standard-width) / var(--card-amt));
  --cardWidthAndCardSpacing:calc(var(--card-width) - var(--card-spacing));

  width:var(--cardWidthAndCardSpacing);
  height:350px;
  overflow:hidden;
}

.product-card__img {
  width:100%;
  height:100%;
  transition:transform ease 0.5s;
  object-fit:cover;
  object-position:50% 50%;
}

.product-card__img:hover { 
  transform: scale(1.05);
 }

.product-card__brand {
  font-size:0.8rem;
  color:rgba(175,175,175,1);
  font-weight:400;
  letter-spacing:0.05rem;
}

.product-card__name {
  font-size:1.05rem;
  font-weight:400;
}

.product-card__price {
  font-size:0.95rem;
  font-weight:400;
  opacity:1;
  transform:translateY(0);
  transition:transform:0.2s ease;
}

.product-card-add-to-cart-btn {
  margin:0 auto;
}






// mobile view
@media only screen and (max-width:1024px) {
    .product-cards {
        --card-amt:3;
    }

    .product-card {
        margin-top:1rem;
      }
  }

  @media only screen and (max-width:768px) {
    .product-cards {
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
  
    .product-cards {
        --card-amt:1;
    }

}



`