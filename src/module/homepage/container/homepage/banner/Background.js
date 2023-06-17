import React from 'react'
import background from "./../../../../assets/images/homepage/Photo.png"
import { styled } from 'styled-components'


export default function Background() {
  return (
    <>
    <Wrapper>
        <img src={background}/>
    </Wrapper>
    
    
    </>
  )
}

const Wrapper=styled.div`
width: 100vw;
object-fit: contain;
position: relative;
max-height: 90vh;
overflow: hidden;

&>img{
    filter: brightness(.25);
    width: 100%;
}


`
