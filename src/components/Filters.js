import React from 'react'

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
    <>
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
    </>
  )
}

export default Filters