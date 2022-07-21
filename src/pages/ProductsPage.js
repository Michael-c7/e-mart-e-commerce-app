import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill, BsFillGridFill, BsSliders } from 'react-icons/bs'
import { MdGrid4X4 } from 'react-icons/md'
import ProductCards from '../components/ProductCards'

import PriceSliderGroupMain from '../components/filterComponents/PriceSliderGroupMain'
import { useProductsContext } from '../context/products_context'


import Accordion from '../components/Accordion'
import Checkbox from '../components/Checkbox'
import MultiRangeSlider from '../components/filterComponents/MultiRangeSlider'

// import MultiRangeSlider from '../components/filterComponents/MultiRangeSlider'

const ProductsPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)


  const filterCategoryData = [
    {
      type:'Categories',
      data:['accessories', 'shoes', 'clothing'],
      dataIndex:0,
    },
    {
      type:'Size',
      data:['small', 'medium', 'large'],
      dataIndex:1,
    },

    {
      type:'Brands',
      data:['poppy', 'lee', 'chaps'],
      dataIndex:2,
    },
    {
      type:'Availability',
      data:['In stock', 'Out of stock'],
      dataIndex:3,
    },
    {
      type:'Color',
      data:['red', 'green', 'blue', 'purple', 'gray', 'black', 'orange','violet','yellow','white','red'],
      dataIndex:4,
    }
  ]

  const {
    products,
    productsLoading,
    productsError,
  } = useProductsContext()
  

  
  return (
    <Wrapper>
      <div className='holder'>
        <div className='side'>
          {/* <input className='search-input' type='text' placeholder='Search'/> */}

          {/*Categories*/}
          <Accordion data={{ accordionHeading:filterCategoryData[0].type, accordionIndex:filterCategoryData[0].dataIndex, firstOfType:true }}>
            <Checkbox  {...{checkboxData:filterCategoryData[0], type:'standard'}}/>
          </Accordion>


          {/*Colors*/}
          <Accordion data={{ accordionHeading:filterCategoryData[4].type, accordionIndex:filterCategoryData[4].dataIndex }}>
            <Checkbox  {...{checkboxData:filterCategoryData[4], type:'color'}}/>
          </Accordion>

          {/*Size*/}
          <Accordion data={{ accordionHeading:filterCategoryData[1].type, accordionIndex:filterCategoryData[1].dataIndex }}>
            <Checkbox  {...{checkboxData:filterCategoryData[1], type:'standard'}}/>
          </Accordion>


          {/*Price*/}
          <Accordion data={{ accordionHeading:'Price', accordionIndex:9090909090 }}>
            <MultiRangeSlider 
              min={0}
              max={200}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
          </Accordion>

          {/*Brands*/}
          <Accordion data={{ accordionHeading:filterCategoryData[2].type, accordionIndex:filterCategoryData[2].dataIndex }}>
            <Checkbox  {...{checkboxData:filterCategoryData[2], type:'standard'}}/>
          </Accordion>




          {/*Availability*/}
          <Accordion data={{ accordionHeading:filterCategoryData[3].type, accordionIndex:filterCategoryData[3].dataIndex }}>
            <Checkbox  {...{checkboxData:filterCategoryData[3], type:'standard'}}/>
          </Accordion>


          <button className='clear-filters-btn'>Clear Filters</button>
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
                  <label className='sort-label' for='sort'>Sort: </label>
                  <div className='select-dropdown sort-container'>
                    <select name='sort' id='sort'>
                      <option value='featured'>Featured</option>
                      <option value='price-lowest'>Price (Lowest)</option>
                      <option value='price-highest'>Price (Highest)</option>
                      <option value='rating-highest'>Rating (Highest)</option>
                      <option value='rating-lowest'>Rating (Lowest)</option>
                      <option value='name-a-z'>Name (A - Z)</option>
                      <option value='name-z-a'>Name (Z - A)</option>
                    </select>
                  </div>
                  <div className='flex-center top-filter__grid-container'>
                    {/*4 X 4 grid layout */}
                    <BsFillGrid3X3GapFill className='grid-icon'/>
                    {/*2 X 2 grid layout */}
                    <BsFillGridFill className='grid-icon'/>
                    {/*1 X 1 grid layout w/ info to side instead of on the bottom*/}
                    <BsFillGrid1X2Fill className='grid-icon grid-icon--diff'/>
                  </div>
                </div>
              </div>
          </div>

          <ProductCards productsData={products} solo={false}/>
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

  width:70vw;
  margin:5rem auto;
  


  .holder {
    position:relative;
    display:grid;
    grid-template-columns:1fr 3fr;
    justify-content:center;
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


  .sort-container {
    margin-right:1rem;
  }

  .sort-label {
    font-size:1.15rem;
    text-transform:uppercase;
    font-weight:500;
    margin-right:0.5rem;
  }

  .grid-icon {
    margin:0 0.25rem;
    font-size:1.5rem;
    color:#AEB0B8;
    transition:color 0.2s ease;
  }

  .grid-icon:hover {
    cursor:pointer;
    color:#000;
  }

  .grid-icon--diff {
    position:relative;
    font-size:calc(1.5rem - 2.5px);
    transform:rotate(180deg);
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











  // .side > * {
  //  margin:1.75rem 0;
  //  border-bottom:2px solid #efefef;
  // }

  // .side > *:first-of-type {
  //   margin-top:0;
  //  }


  .search-input {
    border:none;
    padding:0.75rem;
    background:#F1F5F8;
    color:#222;
    width:auto;
    font-size:0.875rem;
    letter-spacing:0.8px;
  }

  .search-input:placeholder {
    color:#B4B6B7;
  }


  .clear-filters-btn {
    border:none;
    // background:#BB1525;
    background:#EFEFEF;
    border-radius:2px;
    color:#222;
    letter-spacing:0.8px;
    font-size:0.875rem;
    padding:0.75rem 1rem;
    transition:all 0.4s ease;
    text-transform:uppercase;
  }

  .clear-filters-btn:hover {
    color:#fff;
    background:#222;
    cursor:pointer;
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