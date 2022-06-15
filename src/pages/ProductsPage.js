import React from 'react'
import styled from 'styled-components'
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill, BsFillGridFill } from 'react-icons/bs'
import ProductCards from '../components/ProductCards'


const ProductsPage = () => {
  return (
    <Wrapper>
      <div className='top'>
        <div>35 item(s)</div>

        <div>
          <label for="sort">Sort: </label>
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

        <div>
          <label for="view">View: </label>
          <select name="view" id="view">
            <option value="12">12</option>
            <option value="36">36</option>
            <option value="100">100</option>
          </select>
        </div>

        <div>
          {/*4 X 4 grid layout */}
          <BsFillGrid3X3GapFill/>
          {/*2 X 2 grid layout */}
          <BsFillGridFill/>
          {/*1 X 1 grid layout w/ info to side instead of on the bottom*/}
          <BsFillGrid1X2Fill/>
        </div>
      </div>
      <div className='holder'>

        <div className='side'>
          <input type='text' placeholder='Search'/>

          <div>
            <h2>Categories</h2>
            <ul>
              <li>
                <input type="checkbox" value="instock" id="instock"/>
                <label for="instock">ACCESSORIES</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">JEANS</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">T-shirt</label>
              </li>

              <li>
                <input type="checkbox" value="outofstock" id="outofstock"/>
                <label for="outofstock">Shoes</label>
              </li>
            </ul>
          </div>


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
          <div className='holder-more-btns'>
            <button>prev btn</button>
            <div>item here eg: 1,2,3</div>
            <button>next btn</button>
          </div>
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
    display:grid;
    grid-template-columns:1fr 3fr;
    justify-content:center;
  }


  .side {
  
  }

  .top {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    align-self:flex-end;
    margin-bottom:2rem;
  }

  .top div {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin:0 0.5rem;
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