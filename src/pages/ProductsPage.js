import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {  BsSliders } from 'react-icons/bs'
import ProductCards from '../components/ProductCards'
import Filters from '../components/Filters'
import SortDropdown from '../components/SortDropdown'
import GridLayoutSelect from '../components/GridLayoutSelect'
import { useProductsContext } from '../context/products_context'
import Loading from '../components/Loading'
import {sortArray} from '../utils/misc'


const ProductsPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)



  const {
    products,
    productsLoading,
    productsError,
    // gridLayoutType,
  } = useProductsContext()  




    // console.log(sortArray(testArrNum, 'high', 'number'))
  

  /*
    3x3 - the default, 3 product cards per row & image on top info on bottom

    2x2 - like 3x3 but only 2 product cards in a row instead of 3

    1x1-alt - 1 product card per row w/ an alternative layout
    where the image is on the left side & info is on the right 
    instead of the usual image on top info on bottom
  */
  const [gridLayoutType, setGridLayoutType] = React.useState('3x3')
  const [productsData, setProductsData] = React.useState([])


  React.useEffect(() => {
    setProductsData(products)
  }, [])


  React.useEffect(() => {
    let sortedData = productsData.sort((a, b) => {
      return a.fields.price - b.fields.price
    })

    console.log(sortedData)

    setProductsData(sortedData)

  }, [productsData])


  return (
    <Wrapper>
          <div className='container'>
            <div className='left-side'>
              <Filters/>
            </div>
            {productsLoading ? (
              <Loading/>
            ) : (
            <div className='right-side'>
              <div className='right-side__top-filter'>
                <div className='flex-center'>
                  {/* <BsSliders className='mobile-filter-menu-open-icon'/> */}
                  <div className='top-filter__item-count'>Showing: {products.length} products</div>
                </div>
                <div className='flex-center'>
                  <div className='sort-dropdown-container'>
                    <SortDropdown />
                  </div>
                  <GridLayoutSelect {...{gridLayoutType, setGridLayoutType}}/>
                </div>
              </div>
              <div className='right-side__content'>
                <ProductCards {...{productsData:products,solo:false, gridLayoutType, setGridLayoutType}} />
              </div>
            </div>
            )}
          </div>
    </Wrapper>
  )
}

export default ProductsPage

const Wrapper = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  
  margin:5rem var(--general-spacing);
  // background:#0f7fe7;


  .container {
    position:relative;
    display:grid;
    grid-template-columns:1fr 3fr;
    justify-content:center;
    width:100%;
  }
  
  .left-side {
    margin-right:2rem;
  }

  .right-side__top-filter {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    margin-bottom:1rem;
  }


  .mobile-filter-menu-open-icon {
    margin-right:1.5rem;
    display:none;
  }



  @media only screen and (max-width:1024px) {    
    .container {
      display:grid;
      grid-template-columns:1fr;
      justify-content:center;
    }


    .left-side {
      margin-right:0rem;
      display:none;
    }

  }


  @media only screen and (max-width:768px) {  
    .sort-dropdown-container {
      display:none;
    }
  }

  @media only screen and (max-width:250px) {  
    .right-side__top-filter {
      justify-content:center;
    }

    .top-filter__item-count {
      margin-bottom:0.5rem;
    }
  }

`