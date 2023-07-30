import React from 'react'
import styled from 'styled-components'
import robot from '../../assets/robot.svg'

const Robot = () => {
   return (
      <div>
         <Img src={robot} alt="robot" />
      </div>
   )
}

export default Robot

const Img = styled.img`
   position: fixed;
   right: 0px;
   z-index: 7;
   animation: example 8s ease-in-out 9s infinite alternate;
   @keyframes example {
      from {
         right: -220px;
      }
      to {
         right: 0px;
      }
   }
   @media (max-width: 375px) {
      width: 120px;
      height: 120px;
      position: fixed;
      right: 0px;
      z-index: 7;
   }
   @media (max-width: 912px) {
      width: 120px;
      height: 120px;
      position: fixed;
      right: 0px;
      z-index: 7;
   }
`
