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


  React.useEffect(() => {
    let testArrStr = ['cat','abby','zack','bob','steve','zoe','john']
    let testArrNum = [999,52,-2,2,44,10,11,500]

    console.log(sortArray(testArrStr, 'low', 'string'))
  })
  

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


  return (
    <Wrapper>
      <div className='holder'>
        <div className='side'>
          <Filters/>
        </div>
        {productsLoading ? (
          <Loading/>
        ) : (
          <div className='holder-products'>
          <div className='top-filter'>
            <div className='top-filter__inner'>
              <div className='top-filter__inner-left-side'>
                <button className='mobile-filter-open-btn' onClick={() => setMobileFiltersOpen(true)}>
                  <BsSliders/>
                </button>
                <div className='top-filter__item-count'>Showing: {products.length} products</div>
              </div>
                <div className='flex-center'>
                  <SortDropdown/>
                  <GridLayoutSelect {...{gridLayoutType, setGridLayoutType}}/>
                </div>
              </div>
          </div>

          <ProductCards {...{productsData:products,solo:false, gridLayoutType, setGridLayoutType}} />
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
  // width:60vw;
  max-width:100%;
  margin:5rem var(--general-spacing);
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
    // margin:0 1rem;
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
    margin:5rem calc(var(--general-spacing) - 1rem);
    
    .holder {
      position:relative;
      display:grid;
      grid-template-columns:1fr;
      justify-content:center;
    }

    .holder-products  {
      margin-left:0;
    }

    .side {
      display:none;
    }

    .top-filter__inner {
      margin:0 1rem;
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


  @media only screen and (max-width:470px) {
    // background:#0f7fe7; 
    
    // margin:5rem calc(var(--general-spacing) - 1rem);
    margin:0;
    
    .holder {
      position:relative;
      display:flex;
    }

    .top-filter__inner {
      margin:0 0.5rem;
    }
  }



  @media only screen and (max-width:425px) {
    .top-filter__inner,
    .top-filter__inner-left-side {
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }

    .top-filter__item-count {
      margin: 1rem 0; 
    }

    .mobile-filter-open-btn {
      margin-top:1rem;
      margin-right:0rem;
    }
  }



`