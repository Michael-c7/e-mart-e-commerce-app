import React from 'react'
import styled from 'styled-components'


const Loading = () => {
  return (
    <Wrapper>
        <div className="loading"></div>
    </Wrapper>
  )
}

export default Loading


const Wrapper = styled.section`
text-align:center;
padding:0.5rem;

.loading {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 10px solid rgba(155,155,155,.3);
  border-radius: 50%;
  border-top-color: var(--main-color);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}




`