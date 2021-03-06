import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {  BsSliders } from 'react-icons/bs'
import ProductCards from '../components/ProductCards'
import Filters from '../components/Filters'
import SortDropdown from '../components/SortDropdown'
import GridLayoutSelect from '../components/GridLayoutSelect'
import { useProductsContext } from '../context/products_context'

const ProductsPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)



  const {
    products,
    productsLoading,
    productsError,
    gridLayoutType,
  } = useProductsContext()  

  
  return (
    <Wrapper>
      <div className='holder'>
        <div className='side'>
          <Filters/>
        </div>

        <div className='holder-products'>
          <div className='top-filter'>
            <div className='top-filter__inner'>
              <div className='top-filter__inner-left-side'>
                <button className='mobile-filter-open-btn' onClick={() => setMobileFiltersOpen(true)}>
                  <BsSliders/>
                </button>
                <div className='top-filter__item-count'>Showing: 50 products</div>
              </div>
                <div className='flex-center'>
                  <SortDropdown/>
                  <GridLayoutSelect/>
                </div>
              </div>
          </div>

          <ProductCards productsData={products} solo={false} />
        </div>
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
  width:60vw;
  max-width:100%;
  margin:5rem auto;
  // background:#0f7fe7;
  


  .holder {
    position:relative;
    display:grid;
    grid-template-columns:1fr 3fr;
    justify-content:center;
    width:100%;
  }

  .top-filter {
    position:relative;
    width:100%;
    // align-self:center;
    margin-bottom:2rem;
  }

  .top-filter__inner {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin:0 1rem;
  }

  .top-filter__inner__holder {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }

  .top-filter__item-count {
    color:#000;
  }



  .top-filter__inner-left-side {
    display:flex;
    justify-content:center;
    align-items:center;
  }



  .holder-products {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left:2rem;
  }


  .holder-more-btns {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:1.5rem;
  }

  .holder-more-btns button {
    margin:0.5rem;
  }



  

  .mobile-filter-open-btn {
    border:none;
    border-radius:2px;
    font-size:1.15rem;
    padding:0.25rem 0.75rem;
    margin-right:1rem;

    display:none;
  }



  

















  @media only screen and (max-width:1024px) {
    width:100vw;   

    .holder {
      position:relative;
      display:grid;
      grid-template-columns:1fr;
      justify-content:center;
      // background:green;
    }

    .holder-products  {
      margin-left:0;
    }

    .side {
      display:none;
    }
    

    .mobile-filter-open-btn {
      display:block;
    }
  }



  @media only screen and (max-width:768px) {
    .sort-label {
      display:none;
    }

    .sort-container {
      display:none;
    }
  }

  



  //   .mobile-filters-container .sort-label {
  //   display:block;
  // }

  //   .mobile-filters-container .sort-container {
  //   display:block;
  // }


  // .mobile-filters-container .sort-container {
  //   margin-right:0rem;
  // }






`