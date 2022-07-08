import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import StarRating from '../components/StarRating'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { filterProductsByTag } from '../utils/misc'
import ProductCards from './ProductCards'


const NewArrivalShowcase = () => {
    const {
        products,
      } = useProductsContext()


    const [collectionsMasterArray, setCollectionsMasterArray] = useState([])
    const [currentCollection, setCurrentCollection] = useState(0)





  

  useEffect(() => {
    const productAmountForShowcase = 8;
    setCollectionsMasterArray([
      {
        topic:"Accessories",
        productCollection:filterProductsByTag(products, "casual").slice(0, productAmountForShowcase),
      },
    ])
  }, [products])



  return (
    <Wrapper>
    <header>
        <h2 className='collection__heading'>New arrival</h2>
        <h3>Hurry up! Limited</h3>
    </header>
    <div className='collection__cards-all'>
      <ProductCards productsData={collectionsMasterArray[0]?.productCollection}/>
    </div>
  </Wrapper>
  )
}

export default NewArrivalShowcase

const Wrapper = styled.section`
h3 {
  padding:0px;
  margin:0px;
}

width:var(--standard-width);
margin:5rem auto 5rem auto;


header {
    text-align:center;
    margin:1rem 0;
}

header h2 {
    font-weight:500;
    margin-bottom:1.15rem;
}

header h3 {
    font-weight:400;
    font-size:1rem;
    var(--gray);
}

.collection__heading {
  font-size:2rem;
  text-align:center;
}

.collection__categories {
  display:flex;
  flex-wrap:wrap;
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

.collection__category--current {
  color:#000;
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
  --card-amt:4;
  width:100%;
  display:none;
  flex-wrap:wrap;
  justify-content:space-between;
  align-item:center;
}

.collection-cards--show {
  display:flex;
}

.collection-card {
  text-align:center;
 margin:1rem 0;
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
  margin:0 auto;
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