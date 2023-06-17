import React from "react";
import logo from "./../../assets/images/common/logo.svg";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;

export default function HomepageNavbar() {
  return (
    <>
      <Wrapper>

        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <img src={logo} />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Shipper
            </NavLink>
            
          </li>
          <li className="after-span"><span></span></li>
          <li>
            <NavLink
              to="/tracker"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Tracker
            </NavLink>
            
          </li>
          <li className="after-span"><span></span></li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className="after-span"><span></span></li>
          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              How It Works
            </NavLink>
          </li>
          <li className="after-span"><span></span></li>
          <li>
            <NavLink
              to="/request-form"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Request
            </NavLink>
          </li>
        </ul>

      </Wrapper>
    </>
  );
}

const Wrapper=styled.div`
  max-width: 1198px;
  margin:  auto;
  padding: 20px 0;
  justify-content: space-between;
  display: flex;
  background-color: transparent;
  ul{
    display: flex;
    list-style: none;
    align-items: center;
    position: relative;
    &>li{
      margin: 0 20px;
      white-space: nowrap;
      &>a{
        color: white;
      text-decoration: none;

      }      

    }
  }
  .after-span{
    &>span{
      display: block;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  }
  .active{
    position: relative;
    display: block;
    &::after{
      position: absolute !important;
      bottom: -8px;
      left: 0;
      content: "";
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: white;
    }

  }

`
