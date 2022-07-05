import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill, BsFillGridFill, BsSliders } from 'react-icons/bs'

import ProductCards from '../components/ProductCards'
import CheckboxGroupMain from '../components/filterComponents/CheckboxGroupMain'
import CheckBoxColorGroup from '../components/filterComponents/CheckBoxColorGroup'
import PriceSliderGroupMain from '../components/filterComponents/PriceSliderGroupMain'
import Overlay from '../components/Overlay'

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


  

  
  return (
    <Wrapper>
      <Overlay/>
      <div className='holder'>
        <div className='side'>
          <input className='search-input' type='text' placeholder='Search'/>

          {/*Categories*/}
          <CheckboxGroupMain data={filterCategoryData[0]}/>

          {/*Colors*/}
          <CheckBoxColorGroup  data={filterCategoryData[4]}/>

          {/*Size*/}
          <CheckboxGroupMain data={filterCategoryData[1]}/>

          {/*Price*/}
          <PriceSliderGroupMain/>

          {/*Brands*/}
          <CheckboxGroupMain data={filterCategoryData[2]}/>

          {/*Availability*/}
          <CheckboxGroupMain data={filterCategoryData[3]}/>

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

          <ProductCards/>
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
    


    @media only screen and (max-width:768px) {
      .sort-label {
        display:none;
      }
  
      .sort-container {
        display:none;
      }


      .mobile-filter-open-btn {
        display:block;
      }
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