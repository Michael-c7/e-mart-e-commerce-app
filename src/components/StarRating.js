import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'


const StarRating = (props) => {
    const [rating, setRating] = React.useState(
        typeof props.rating == "number" ? props.rating : 0
      );

  return (
    <Wrapper>
    {Array.from({ length: 5 }, (v, i) => (
        <li className='star' key={i}>
            {rating >= i ? <BsStarFill/> : <BsStar/>}   
        </li>
    ))}
    </Wrapper>
  );
}

export default StarRating


const Wrapper = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    .star {
        margin:0.5rem 0.1rem;
        color:var(--star-rating-color);
    }
`