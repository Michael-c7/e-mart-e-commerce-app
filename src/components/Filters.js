import React from 'react'
import styled from 'styled-components'

import Accordion from '../components/Accordion'
import Checkbox from '../components/Checkbox'
import MultiRangeSlider from '../components/MultiRangeSlider'

import { generateUniqueId } from '../utils/misc'

const Filters = () => {
    const filterCategoryData = [
        {
          type:'Categories',
          data:['accessories', 'shoes', 'clothing'],
        },
        {
          type:'Size',
          data:['small', 'medium', 'large'],
        },
    
        {
          type:'Brands',
          data:['poppy', 'lee', 'chaps'],
        },
        {
          type:'Availability',
          data:['In stock', 'Out of stock'],
        },
        {
          type:'Color',
          data:['red', 'green', 'blue', 'purple', 'gray', 'black', 'orange','violet','yellow','white','red'],
        }
    ]
    



  return (
    <Wrapper>
        {/* <input className='search-input' type='text' placeholder='Search'/> */}

          {/*Categories*/}
          <Accordion data={{ accordionHeading:filterCategoryData[0].type, accordionIndex:generateUniqueId(), firstOfType:true }}>
            <Checkbox  {...{checkboxData:filterCategoryData[0], type:'standard'}}/>
          </Accordion>


          {/*Colors*/}
          <Accordion data={{ accordionHeading:filterCategoryData[4].type, accordionIndex:generateUniqueId() }}>
            <Checkbox  {...{checkboxData:filterCategoryData[4], type:'color'}}/>
          </Accordion>

          {/*Size*/}
          <Accordion data={{ accordionHeading:filterCategoryData[1].type, accordionIndex:generateUniqueId() }}>
            <Checkbox  {...{checkboxData:filterCategoryData[1], type:'standard'}}/>
          </Accordion>


          {/*Price*/}
          <Accordion data={{ accordionHeading:'Price', accordionIndex:generateUniqueId() }}>
            <MultiRangeSlider 
              min={0}
              max={200}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
          </Accordion>

          {/*Brands*/}
          <Accordion data={{ accordionHeading:filterCategoryData[2].type, accordionIndex:generateUniqueId() }}>
            <Checkbox  {...{checkboxData:filterCategoryData[2], type:'standard'}}/>
          </Accordion>


          {/*Availability*/}
          <Accordion data={{ accordionHeading:filterCategoryData[3].type, accordionIndex:generateUniqueId() }}>
            <Checkbox  {...{checkboxData:filterCategoryData[3], type:'standard'}}/>
          </Accordion>


          <button className='clear-filters-btn'>Clear Filters</button>
    </Wrapper>
  )
}

export default Filters



const Wrapper = styled.section`

// .search-input {
//   border:none;
//   padding:0.75rem;
//   background:#F1F5F8;
//   color:#222;
//   width:auto;
//   font-size:0.875rem;
//   letter-spacing:0.8px;
// }

// .search-input:placeholder {
//   color:#B4B6B7;
// }

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
`