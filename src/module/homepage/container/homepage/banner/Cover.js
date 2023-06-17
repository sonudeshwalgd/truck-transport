import React from "react";
import { styled } from "styled-components";
import BookTruck from "./BookTruck";

export default function Cover() {
  return (
    <Wrapper>
      <div>
        <div className="left">
            <div className="sub-haeding">
            <span></span>
             <p>Streamline Your Logistics with Easy Truck Booking</p>
            </div>
          <h1 className="heading">ReeRoute: India's  </h1>
          <h1 className="heading">Fastest Truck</h1>
          <h1 className="heading">Booking Platform!</h1>
          <div className="list">
            <ul>
              <li>Pan-India operations</li>
              <li>
              Associated with 3,000+ SMEs/Transporters

              </li>
              <li>Guaranteed Timely Payments</li>
            </ul>
          </div>
        </div>
        <div className="right">
            <BookTruck/>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  &>div{
    display: flex;
    gap: 12vw;
    padding-top: 8vh;
    .left{
        display: flex;
        flex-direction: column;
        gap: 10px;
        .sub-haeding{
            position: relative;
            display: flex;
            gap: 3px;
            background-color: #041C37;
            width: max-content;
            padding-right: 10px;
            span{
                height: 100%;
                width: 5px;
                display: block;
                background: linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%);
            }
            p{
                font-size: 12px;
                padding: 5px 0;

            }
        }
        .heading{
            font-size: 3rem;
            line-height: 100%;
        }
        &>.list{
            margin-left: 20px;
            ul{
                li{
                    font-size: 14px;
                }
            }
        }
        

    }

  }
`;
