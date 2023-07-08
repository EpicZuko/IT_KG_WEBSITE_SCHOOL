import React from 'react'
import styled from 'styled-components'
import image from '../assets/image13.png'

const About = () => {
   return (
      <div>
         <div>
            <H1>Биз жөнүндө</H1>
         </div>
         <Div>
            <div>
               <Img src={image} alt="" />
            </div>
            <div>
               <Img src={image} alt="" />
            </div>
            <div>
               <Img src={image} alt="" />
            </div>
            <div>
               <Img src={image} alt="" />
            </div>
            <div>
               <Img src={image} alt="" />
            </div>
            <div>
               <Img src={image} alt="" />
            </div>
            <div>
               <Img src={image} alt="" />
            </div>
            <div>
               <Img src={image} alt="" />
            </div>
         </Div>
      </div>
   )
}

export default About
const H1 = styled.h1`
   color: #0a5271;
   font-family: Roboto;
   font-size: 30px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 2.1px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 63px;
   @media (max-width: 375px) {
      margin-bottom: 26px;
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
   }
   @media (max-width: 414px) {
      margin-bottom: 26px;
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
   }
   @media (max-width: 820px) {
      margin-bottom: 26px;
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
   }
`
const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   flex-wrap: wrap;
   @media (max-width: 375px) {
      margin-bottom: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      margin-left: -4px;
   }
   @media (max-width: 414px) {
      margin-bottom: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      margin-left: -4px;
   }
   @media (max-width: 820px) {
      margin-bottom: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      margin-left: -4px;
   }
`
const Img = styled.img`
   width: 327px;
   height: 242px;
   margin-left: 6px;
   margin-bottom: 28px;
   @media (max-width: 375px) {
      width: 175px;
      height: 120px;
      flex-shrink: 0;
   }
   @media (max-width: 414px) {
      width: 175px;
      height: 120px;
      flex-shrink: 0;
   }
   @media (max-width: 820px) {
      width: 175px;
      height: 120px;
      flex-shrink: 0;
   }
`
