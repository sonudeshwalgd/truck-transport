import React from 'react'
import { styled } from 'styled-components'

export default function Cards({number,category}) {
  return (
    <Wrapper>
    <div>
        <h4>{number} +</h4>
        <div className='box'></div>
        <p>{category}</p>

    </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width: 100%;
position: relative;
&>div{
    display: flex;

}

`