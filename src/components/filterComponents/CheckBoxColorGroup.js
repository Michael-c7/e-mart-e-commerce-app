import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


const CheckBoxColorGroup = (props) => {
  const { type, data, dataIndex } = props.data;
  const [menuOpen, setMenuOpen] = useState(false)



  function slidetoggle() {
    document.querySelectorAll(this.getAttribute('data-slidetoggle')).forEach(el => {
      const ch = el.clientHeight,
        sh = el.scrollHeight,
        isCollapsed = !ch,
        noHeightSet = !el.style.height;
  
      el.style.height = (isCollapsed || noHeightSet ? sh : 0) + 'px';
      if (noHeightSet) return slidetoggle.call(this);
    });
  }
  
  React.useEffect(() => {
    document.querySelectorAll('[data-slidetoggle]').forEach(el => el.addEventListener('click', slidetoggle));
  },[])


  return (
    <Wrapper>
      <div className={`filter-checkbox-group ${menuOpen && 'filter-checkbox-group--open'}`}>
        <header className='filter-checkbox-group__header' data-slidetoggle={`#box${dataIndex}`} onClick={() => setMenuOpen(!menuOpen)}>
          <h2 className='filter-checkbox-group__heading'>{type}</h2>
          <div className={`wrap ${menuOpen ? ' toggle open ' : 'toggle'}`}>
            <div className='toggle'></div>
          </div>
        </header>
        
        <ul className='checkbox-items' id={`box${dataIndex}`}>
          {data.map((item, index) => {
            return (
              <li className='checkbox-item' key={index}>
                <label class='box'>{item}
                  <input type='checkbox'/>
                  <span class='mark' style={{backgroundColor:item}}></span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
  </Wrapper>
  )
}

export default CheckBoxColorGroup


const Wrapper = styled.section`
  // border-bottom:1px solid #F4F4F4;

.filter-checkbox-group__header {
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
  margin-bottom:0.75rem;
}

.filter-checkbox-group__heading {
  font-size:1.15rem;
  font-weight:600;
  transition:all 0.2s ease;
  top:5px;
  position:relative;
}

.filter-checkbox-group__header:hover .filter-checkbox-group__heading {
  color:var(--main-color);
  cursor:pointer;
}


.checkbox-items {
  display:grid;
  grid-template-columns:repeat(2, auto);
  overflow:hidden;
  transition:height 0.5s;
}




.box {
    display:block;
    position:relative;
    padding-left:28px;
    margin-bottom:10px;
    cursor:pointer;
    // font-size: 20px;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
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
    // transition:all 0.2s ease;
  }





  /* Specify the background color for the checkbox when it is checked */
  .box input:checked + .mark {
    border:5px solid white;
  }


  /* Checkmark to be shown in checkbox */
  /* It will not be shown when not checked */
  .mark:after {
    content: '';
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
    left:-5px;
    top:-5px;
    width:calc(100% + 10px);
    height:calc(100% + 10px);
    border:solid var(--main-color) 3px;
  }









  /*plus / minus things*/
  --w: 12px;
  --h: 2px;
  --bg: #333;
  --transition: 0.5s all cubic-bezier(.17,.67,.09,.97);
  
  .wrap {
    width: 25px;
    height: 25px;
    background: #F38630;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .toggle {
    width: var(--w);
    height: var(--h);
    background: var(--bg);
    position: relative;
    transition: var(--transition);
    
    &.open::after {
      transform: rotate(90deg);
      opacity: 1;
    }
    
    &.open {
      transform: rotate(90deg);
    }
    
    &::after {
      content: '';
      width: var(--w);
      transition: var(--transition);
      transition-delay: .1s;
      height: var(--h);
      position: absolute;
      opacity: 0;
      background: var(--bg);
    }
  }
  
  
  
`
