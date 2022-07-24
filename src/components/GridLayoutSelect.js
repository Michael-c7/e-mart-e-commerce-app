import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { 
    BsFillGrid3X3GapFill,
    BsFillGrid1X2Fill,
    BsFillGridFill,
} from 'react-icons/bs'




const GridLayoutSelect = () => {
    const {
            gridLayoutType,
            changeGridLayoutType,
        } = useProductsContext()
    

    return (
        <Wrapper>
            <div className='flex-center'>
                {/*3 X 3 grid layout */}
                <BsFillGrid3X3GapFill className={`grid-icon ${gridLayoutType === '3x3' && 'grid-icon--current'} `} data-grid-type='3x3' onClick={() => changeGridLayoutType('3x3')}/>
                {/*2 X 2 grid layout */}
                <BsFillGridFill className={`grid-icon ${gridLayoutType === '2x2' && 'grid-icon--current'} `} data-grid-type='2x2' onClick={() => changeGridLayoutType('2x2')}/>
                {/*1 X 1 grid layout w/ info to side instead of on the bottom*/}
                <BsFillGrid1X2Fill className={`grid-icon grid-icon--unique ${gridLayoutType === '1x1-alt' && 'grid-icon--current'} `} data-grid-type='1x1-alt' onClick={() => changeGridLayoutType('1x1-alt')}/>
            </div>
        </Wrapper>

  )
}

export default GridLayoutSelect

const Wrapper = styled.section`

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

  .grid-icon--unique {
    position:relative;
    font-size:calc(1.5rem - 2.5px);
    transform:rotate(180deg);
  }



  .grid-icon--current {
    color:#000;
  }

  .grid-icon--current:hover {
    cursor:auto;
  }


`