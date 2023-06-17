import React from 'react'
import { styled } from 'styled-components'

export default function BookTruck() {
  return (
    <Wrapper>
        <div>
            <h3> Book Your Truck</h3>
            <div>
                <p>From</p>
                <input/>
            </div>
            <div>
                <p>To</p>
                <input/>
            </div>
            <div>
                <button type='submit'>Next</button>
            </div>


        </div>

    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
width: 100%;
&>div{
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    padding: 20px;
    gap: 7vh;
    display: flex;
    flex-direction: column;
    color: black;
    h3{
        text-align: center;
    }
    &>div{
        width: 100%;
        input{
            width: 100%;
            min-width: 18vw;
            padding: 6px 12px;
            border: 1px solid #ccc;
            /* outline: 1px solid #333; */

        }
        button{
            width: 100%;
            background: linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%);
            border: none;
            outline: none;
            padding: 10px;
        }
    }

}


`