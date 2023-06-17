import React from 'react'
import { styled } from 'styled-components'
import Background from './Background'
import Cover from './Cover'

export default function Banner() {
  return (
    <Wrapper>
      <div className='background'>
          <Background/>
      </div>
      <Cover/>
    
    </Wrapper>
  )
}


const Wrapper=styled.div`
width: 100vw;
position: relative;

height: 90vh;
.background{
  position: absolute;
  top: 0;
  z-index: -10;
}
`