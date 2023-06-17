import React from 'react'
import background from "./../../../../assets/images/request/Rectangle 22.png"
import { styled } from 'styled-components'

export default function Banner() {
  return (
    <Wrapper>
        <img src={background}/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
`