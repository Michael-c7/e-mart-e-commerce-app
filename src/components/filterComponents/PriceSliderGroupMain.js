import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import MultiRangeSlider from './MultiRangeSlider'

const PriceSliderGroupMain = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    /*
    give a unique number so the slideToggle function
    will only close the current group and not multiple
    */
    let dataIndex = 9999;
  
  
  
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
    }, [])
  
  



    return (
        <Wrapper>
          <div className={`filter-checkbox-group ${menuOpen && 'filter-checkbox-group--open'}`}>
            <header className='filter-checkbox-group__header' data-slidetoggle={`#box${dataIndex}`} onClick={() => setMenuOpen(!menuOpen)}>
              <h2 className='filter-checkbox-group__heading'>Price</h2>
              <div className={`wrap ${menuOpen ? ' toggle open ' : 'toggle'}`}>
                <div className='toggle'></div>
              </div>
            </header>
            
            <ul className='checkbox-items' id={`box${dataIndex}`}>
                  <li className='checkbox-item'>
                      <MultiRangeSlider
                        min={0}
                        max={200}
                        menuOpen={menuOpen}
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                      />
                  </li>
            </ul>
          </div>
      </Wrapper>
      )
}

export default PriceSliderGroupMain

const Wrapper = styled.section`
// border-bottom:1px solid #F4F4F4;
margin:1.5rem 0;

.filter-checkbox-group__header {
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;

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


.filter-checkbox-group__open-icon {
  font-size:1.25rem;
}




.checkbox-items {
  overflow: hidden;
  transition: height 0.5s;
}



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
