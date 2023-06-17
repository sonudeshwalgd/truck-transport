import React from 'react'
import { styled } from 'styled-components'
import mobile from "./../../../../../assets/images/homepage/0888 4.svg"

export default function ShipperApp() {
  return (
    <Wrapper>
        <div>
            <div className="left">
                <img src={mobile}></img>
            </div>
            <div className="right">
                <div>
                <h4>Verified Vehicle Owners</h4>
                <p>At ReeRoute, we ensure the authenticity of our Vehicle Owners through a meticulous verification process. Rest assured, your transportation needs are in safe hands.</p>
                </div>

                <div>
                    <h4>Best Price</h4>
                    <p>We believe in providing reliable truck transportation services without breaking the bank. With ReeRoute, you get the best price for your logistics needs.</p>
                </div>            
                <div>
                    <h4>Customer Centricity</h4>
                    <p>Your satisfaction is our top priority. Our dedicated team is here to provide exceptional customer support at every stage of your trip. </p>
                </div>            


            </div>
        </div>


    </Wrapper>
  )
}

const Wrapper=styled.div`
width: 100vw;
position: relative;
background-color: #F4F4F4;
&>div{
    max-width: 1198px;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .left{
        img{
            max-width: 600px;
            object-fit: contain;
        }
    }
    .right{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 400px;

        &>div{
            h4{
                color:#2A4F6D ;
                font-size: 20px;
            }
            p{
                color: #2A4F6D;
                font-size: 16px;
            }
        }
    }
}


`