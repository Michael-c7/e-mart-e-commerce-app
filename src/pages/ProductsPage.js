import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill, BsFillGridFill } from 'react-icons/bs'

import ProductCards from '../components/ProductCards'
import CheckboxGroupMain from '../components/filterComponents/CheckboxGroupMain'
import CheckBoxColorGroup from '../components/filterComponents/CheckBoxColorGroup'
import PriceSliderGroupMain from '../components/filterComponents/PriceSliderGroupMain'

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
              <div className='top-filter__item-count'>Showing: 50 products</div>
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




      {mobileFiltersOpen ? (
        <div className='close-mobile-filters-buttons'>
          <button className='close-mobile-filters-buttons__btn-close'onClick={() => setMobileFiltersOpen(false)}>Close</button>
          <button className='close-mobile-filters-buttons__btn-apply'onClick={() => {
          setMobileFiltersOpen(false)
          // also have the actual mobile menu CLOSE w/ this onclick & APPLY the changes to the filter / products
        }}>Apply & Close</button>
        </div>
      ) : (
        <button className='open-mobile-filters-btn' onClick={() => {
          setMobileFiltersOpen(true)
          // also have the actual mobile menu OPEN w/ this onclick
        }}>Refine & Sort</button>
      )}
      



      <section className='mobile-filters-container'>
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
      </section>
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


  .side {
  
  }

  .top-filter {
    position:relative;
    width:100%;

    // align-self:center;
    margin-bottom:2rem;
  }



  .top-filter__inner {
      // background:green;

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


  .sort-container {
    margin-right:1rem;
  }

  .sort-label {
    font-size:1.15rem;
    text-transform:uppercase;
    font-weight:500;
    margin-right:0.5rem;
  }


  .top-filter__grid-container {
    
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
  




















 .close-mobile-filters-buttons {
  position:fixed;
  bottom:0;
  width:100%;
  // background-color:var(--main-color);
  color:#fff;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
 }




 .close-mobile-filters-buttons__btn-close,
 .close-mobile-filters-buttons__btn-apply {
  font-size:1.15rem;
  padding:1rem 0;
  border:none;
  text-transform:uppercase;
  font-weight:500;
  flex:1;
  cursor:pointer;
 }

 .close-mobile-filters-buttons__btn-close {
  background-color:#efefef;
 }

 .close-mobile-filters-buttons__btn-apply {
  background:var(--main-color);
  color:#fff;
 }



  .open-mobile-filters-btn {
    position:fixed;
    bottom:0;
    width:100%;
    font-size:1.15rem;
    letter-spacing:0.25px;
    padding:1rem 0;
    border:none;
    background-color:var(--main-color);
    color:#fff;
    text-transform:uppercase;
    font-weight:500;
    cursor:pointer;
  }



  

  .mobile-filters-container {
    position:absolute;
    background:#fff;
    z-index:999;
    top:0;
    left:0;
    width:100vw;
    height:100vh;

    // display:block;

    display:none;
  }







`