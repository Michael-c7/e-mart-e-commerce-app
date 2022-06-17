import React from 'react'
import styled from 'styled-components'
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill, BsFillGridFill } from 'react-icons/bs'

import ProductCards from '../components/ProductCards'
import CheckboxGroupMain from '../components/filterComponents/CheckboxGroupMain'
import CheckBoxColorGroup from '../components/filterComponents/CheckBoxColorGroup'

import PriceSliderGroupMain from '../components/filterComponents/PriceSliderGroupMain'

const ProductsPage = () => {


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
      <div className='top-filter'>
        <div></div>

        <div className='top-filter__inner'>
          <div className='top-filter__item-count'>Showing: 50 products</div>

          <div className='flex-center'>
            <label className='sort-label' for="sort">Sort: </label>
            <div className='select-dropdown sort-container'>
              <select name="sort" id="sort">
                <option value="featured">Featured</option>
                <option value="price-lowest">Price (Lowest)</option>
                <option value="price-highest">Price (Highest)</option>
                <option value="rating-highest">Rating (Highest)</option>
                <option value="rating-lowest">Rating (Lowest)</option>
                <option value="name-a-z">Name (A - Z)</option>
                <option value="name-z-a">Name (Z - A)</option>
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


      <div className='holder'>

        <div className='side'>
          <input type='text' placeholder='Search'/>

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



          <button>Clear Filters</button>


          {/* <div>
            <h2>AVAILABILITY</h2>
            <ul>
              <li>
                <input type="checkbox" value="instock" id="instock"/>
                <label for="instock">In stock</label>
              </li>
              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">Out of stock</label>
              </li>
            </ul>
          </div>    */}
        </div>

        <div className='holder-products'>
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


  .side {
  
  }

  .top-filter {
    position:relative;
    width:100%;

    // align-self:center;
    margin-bottom:2rem;


    display:grid;
    grid-template-columns:1fr 3fr;
    justify-content:center;
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




  
`