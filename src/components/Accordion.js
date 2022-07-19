import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const Accordion = (props) => {
  const { accordionHeading, accordionData, accordionIndex } = props.data;
// console.log(props.data)
// for now
//   let accordionHeading = 'default heading'
//   let accordionData = 'default data'
//   let accordionIndex = 999999999999;



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
  }, [])




  return (
    <Wrapper>
      <div className='accordion'>
        <header className='accordion__header' data-slidetoggle={`#box${accordionIndex}`} onClick={() => setMenuOpen(!menuOpen)}>
          <h2 className='accordion__heading'>{accordionHeading}</h2>
          <div className={`wrap ${menuOpen ? ' toggle open ' : 'toggle'}`}>
            <div className='toggle'></div>
          </div>
        </header>

        
        <div className='accordion__data' id={`box${accordionIndex}`}>
           {accordionData}
        </div>
      </div>
  </Wrapper>
  )
}

export default Accordion


const Wrapper = styled.section`
  --w: 12px;
  --h: 2px;
  --bg: #333;
  --transition: 0.5s all cubic-bezier(.17,.67,.09,.97);


  // margin:0 0 1.5rem 0;
  // border-bottom:1px solid #F4F4F4;

  width:calc(100% - 2rem);
  margin:2rem auto;
  position:relative;


.accordion__header {
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
  // margin-bottom:0.75rem;
}

.accordion__heading {
  font-size:1.15rem;
  font-weight:600;
  transition:all 0.2s ease;
  top:5px;
  position:relative;
  // margin-bottom:1.25rem;
}

.accordion__header:hover .accordion__heading {
  color:var(--main-color);
  cursor:pointer;
}






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


.accordion__data {
  overflow: hidden;
  transition: height 0.5s;
}

  
`
