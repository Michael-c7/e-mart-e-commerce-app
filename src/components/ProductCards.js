import React from 'react'
import styled from 'styled-components'
import StarRating from '../components/StarRating'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
// import { filterProductsByTag } from '../utils/misc'
import Loading from '../components/Loading'






const ProductCards = (props) => {
  /*solo means if the component is not contained w/ anything else
  eg: the productCards in newArrival component would be solo={true}
  and the productCards in the Products page would be solo={false} */
  const { productsData, solo } = props;

  const {
    products,
    productsLoading,
    productsError,
    gridLayoutType,
  } = useProductsContext()

      return (
        <Wrapper>
         {productsLoading ? <Loading/> : (
          <ul className={`product-cards  ${solo ? 'solo--true' : 'solo--false'}  grid-layout-${gridLayoutType}`}>
            {productsData?.map((product, index) => {
              const {fields:productData, id:productId} = product;
              return (
                <li className='product-card' key={productId}>
                  <Link to='/products'>
                    <div className='product-card__img-container'>
                      <img className='product-card__img' src={productData?.images[0].url} alt={productData?.Name}/>
                    </div>
                  </Link>
                  <div>
                    <StarRating className='product-card__stars' rating={productData?.Rating}/>
                    <h4 className='product-card__brand'>{productData?.brand}</h4>
                    <h2 className='product-card__name'>{productData?.Name}</h2>
                    <div className='product-card__info'>
                        <h2 className='product-card__price'>${productData?.price}</h2>
                        <button className='standard-button product-card-add-to-cart-btn'>ADD TO CART</button>
                    </div>
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


.product-cards {
  --card-amt:4;
  width:100%;
}

.product-cards.solo--true {
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
}

.product-cards.solo--false  {
  --card-amt:3;
  display:grid;
  grid-template-columns:repeat(var(--card-amt), minmax(100px, 1fr));
  grid-gap:4rem 2rem;
}



.product-card {
  --card-space:0.25rem;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}


.solo--true .product-card {
  --card-space:0.25rem;
  --card-spacing:calc(var(--card-amt) * var(--card-space));
  --card-width:calc(var(--standard-width) / var(--card-amt));
  --cardWidthAndCardSpacing:calc(var(--card-width) - var(--card-spacing));
  width:var(--cardWidthAndCardSpacing);
  margin:1.75rem 0;
}

.solo--false .product-card {
  width:100%;
}






.product-card__img-container {
  // width:var(--cardWidthAndCardSpacing);

  height:350px;
  overflow:hidden;
}


.solo--true.product-card__img-container {
  height:350px;
  overflow:hidden;
}


.solo--false.product-card__img-container {
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
  @media only screen and (max-width:768px) {
    .product-cards {
        --card-amt:2;
    }

    .product-cards.solo--false  {
      --card-amt:2;
    }
  }


  @media only screen and (max-width:425px) { 
    .product-cards {
      --card-amt:1;
    }

    .product-cards.solo--false  {
      --card-amt:1;
    }

}












/*layouts*/
.grid-layout-3x3.solo--false  {
  --card-amt:3;
}

.grid-layout-2x2.solo--false  {
  --card-amt:2;
}


.grid-layout-1x1-alt.solo--false {
  --card-amt:1;
}




.grid-layout-1x1-alt.solo--false .product-card {
  --card-space:0.25rem;
  text-align:center;


  display:grid;
  grid-template-columns:minmax(100px,1fr) 1fr;
  justify-items:start;
  justify-content:start;
  align-items:center;


  background:red;
}


`