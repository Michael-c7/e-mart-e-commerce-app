import React from 'react'
import styled from 'styled-components'

const AboutPage = () => {
  return (
    <Wrapper>
      <div className='about__info'>
          <h1 className='about__heading'>About Us</h1>
          <p className='about__text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
          </p>
      </div>
    </Wrapper>
  )
}

export default AboutPage

const Wrapper = styled.section`



   .about__text {
    max-width:60ch;
   }
`