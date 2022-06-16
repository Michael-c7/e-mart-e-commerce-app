import React from 'react'
import styled from 'styled-components'
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill, BsFillGridFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import ProductCards from '../components/ProductCards'
import CheckboxGroupMain from '../components/filterComponents/CheckboxGroupMain'

const ProductsPage = () => {




  
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


          <CheckboxGroupMain/>
          {/* <div className='filter-checkbox-group'>
            <header className='filter-checkbox-group__header'>
              <h2 className='filter-checkbox-group__heading'>Categories</h2>
              <AiOutlinePlus className='filter-checkbox-group__open-icon'/>
            </header>
            <ul className='checkbox-item'>
              <li className='checkbox-item'>
                <label class="box">accessories
                  <input type="checkbox"/>
                  <span class="mark"></span>
                </label>
              </li>

              <li className='checkbox-item'>
                <label class="box">shoes
                  <input type="checkbox"/>
                  <span class="mark"></span>
                </label>
              </li>

              <li className='checkbox-item'>
                <label class="box">clothing
                  <input type="checkbox"/>
                  <span class="mark"></span>
                </label>
              </li>
            </ul>
          </div> */}


          <div>
            <h2>Price</h2>
            price slider here

            <div>
              <div>$12- $87</div>
              <button>Clear</button>
            </div>
          </div>


          <div>
            <h2>COLOR</h2>
            <ul>
              <li>
                <input type="checkbox" value="instock" id="instock"/>
                <label for="instock">red (as a color square)</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">green (as a color square)</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">blue (as a color square)</label>
              </li>
            </ul>
          </div>


          <div>
            <h2>SIZE</h2>
            <ul>
              <li>
                <input type="checkbox" value="instock" id="instock"/>
                <label for="instock">Small</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">Medium</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">Large</label>
              </li>
            </ul>
          </div>

          <div>
            <h2>BRANDS</h2>
            <ul>
              <li>
                <input type="checkbox" value="instock" id="instock"/>
                <label for="instock">poppy</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">chaps</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">lee's</label>
              </li>
            </ul>
          </div>


          <div>
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
          </div>   
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
    // background:red;

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









  .box {
    display: block;
    position: relative;
    padding-left: 28px;
    margin-bottom: 10px;
    cursor: pointer;
    // font-size: 20px;
  }

  /* Hide the default style of the checkbox */
  input[type=checkbox] {
    visibility: hidden;
  }


  /* Create a custom checkbox */
  .mark {
    position:absolute;
    top:3px;
    left:0px;
    height:20px;
    width:20px;
    background-color:#efefef;
    transition:all 0.2s ease;
  }


  /* Specify the background color for the checkbox while hovering */
  .box:hover input + .mark {
    background-color:#e0e0e0;
  }


  /* Specify the background color for the checkbox when the checkbox is active */
  .box input:active + .mark {
    background-color: #ccc;
  }


  /* Specify the background color for the checkbox when it is checked */
  .box input:checked + .mark {
    background-color: #8ebf42;
    background-color: var(--main-color);
    
  }


  /* Checkmark to be shown in checkbox */
  /* It will not be shown when not checked */
  .mark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Display checkmark when checked */
  .box input:checked + .mark:after {
    display: block;
  }

  
  /* Styling the checkmark using webkit */
  /* Rotated the rectangle by 45 degree and showing only two border to make it look like a tick mark */
  .box .mark:after {
    left: 8px;
    bottom: 5px;
    width: 6px;
    height: 12px;
    border: solid #eee;
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
`