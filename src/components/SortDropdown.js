import React from 'react'
import styled from 'styled-components'

const SortDropdown = (props) => {
  const [sortValue, setSortValue] = React.useState('')
  
  React.useEffect(() => {
    console.log(sortValue)
  }, [sortValue])

  return (
    <Wrapper sortLabelDirection={`${props.sortLabelDirection || 'row'}`}>
       <label className='sort-label' htmlFor='sort'>{props.sortLabelDirection ? 'Sort by' : 'Sort:'} </label>
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
display:flex;
align-items:${props => props.sortLabelDirection ? 'start' : 'center'};
flex-direction:${props => props.sortLabelDirection};


.sort-label {
  font-size:1.15rem;
  text-transform:uppercase;
  font-weight:500;
  margin-right:${props => props.sortLabelDirection ? '0.5rem' : '0rem'};
  margin-bottom:${props => props.sortLabelDirection ? '1rem' : '0rem'};
}


/*select*/
.select-dropdown {
  position: relative;
  background-color: #F7F7F8;
  width: auto;
  float: left;
  max-width: 100%;
  border-radius: 2px;
  
}
.select-dropdown select {
  font-family: "helvetica neue", helvetica;
  font-size: 1rem;
  font-weight: 200;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  color:#505050;
  
}
.select-dropdown select:active, .select-dropdown select:focus {
  outline: none;
  box-shadow: none;
}
.select-dropdown:after {
  content: " ";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  right: 8px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #aaa;
}

`