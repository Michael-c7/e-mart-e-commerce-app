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
    <header className='showcase__header'>
        <h2 className='showcase__heading collection__heading'>New arrival</h2>
        <h3 className='showcase__sub-heading'>Hurry up! Limited</h3>
    </header>
    
    <ProductCards productsData={collectionsMasterArray[0]?.productCollection} solo={true}/>
  </Wrapper>
  )
}

export default NewArrivalShowcase

const Wrapper = styled.section`
width:var(--standard-width);
margin:5rem auto 5rem auto;

.showcase__header {
  text-align:center;
  margin:1rem 0;
}

.showcase__heading {
  font-weight:500;
  margin-bottom:1.15rem;
  font-size:2rem;
  text-align:center;
}

.showcase__sub-heading {
  font-weight:400;
  font-size:1rem;
  var(--gray);
}

`