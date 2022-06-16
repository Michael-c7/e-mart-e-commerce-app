import React from 'react'
import styled from 'styled-components'

import { AiOutlinePlus } from 'react-icons/ai'


const CheckboxGroupMain = () => {
  return (
    /*filter-checkbox-group*/
    <Wrapper>
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
  </Wrapper>
  )
}

export default CheckboxGroupMain


const Wrapper = styled.section`

.filter-checkbox-group__header {
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.filter-checkbox-group__heading {
  font-size:1.25rem;
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