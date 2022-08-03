import React from 'react'
import styled from 'styled-components'

const SortDropdown = () => {
  const [sortValue, setSortValue] = React.useState('')
  const sortValRef = React.useRef(null);
  
  React.useEffect(() => {
    console.log(sortValue)
  }, [sortValue])

  return (
    <Wrapper>
       <label className='sort-label' htmlFor='sort'>Sort: </label>
        <div className='select-dropdown sort-container'>
            <select name='sort' id='sort'  onChange={e => setSortValue(e.target.value)}>
                <option value='featured'>Featured</option>
                <option value='price-lowest'>Price (Lowest)</option>
                <option value='price-highest'>Price (Highest)</option>
                <option value='rating-highest'>Rating (Highest)</option>
                <option value='rating-lowest'>Rating (Lowest)</option>
                <option value='name-a-z'>Name (A - Z)</option>
                <option value='name-z-a'>Name (Z - A)</option>
            </select>
        </div>
    </Wrapper>
  )
}

export default SortDropdown

const Wrapper = styled.section`
.sort-container {
    margin-right:1rem;
  }

  .sort-label {
    font-size:1.15rem;
    text-transform:uppercase;
    font-weight:500;
    margin-right:0.5rem;

    background:red;
  }
`