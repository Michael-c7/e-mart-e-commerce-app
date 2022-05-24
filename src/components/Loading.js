import React from 'react'
import styled from 'styled-components'


const Loading = () => {
  return (
    <Wrapper>
        <div>Loading...</div>
    </Wrapper>
  )
}

export default Loading


const Wrapper = styled.section`
    div {
        color:green;
    }
`