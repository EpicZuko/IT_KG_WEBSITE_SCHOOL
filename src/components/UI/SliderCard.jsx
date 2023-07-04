import React from 'react'
import styled from 'styled-components'

const SliderCard = ({ img, userName, name }) => {
   return (
      <Div>
         <DIV>
            <DVImg>
               <Img src={img} alt="error" />
            </DVImg>
            <H1>{userName}</H1>
            <P>{name}</P>
         </DIV>
      </Div>
   )
}

export default SliderCard
const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`
const DIV = styled.div`
   width: 37rem;
   height: 42rem;
   border-radius: 2rem;
   object-fit: cover;
   background: #fff;
   box-shadow: 1px 1px 10px 0px rgba(10, 82, 113, 0.25);
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media (max-width: 390px) {
      width: 217px;
      height: 261px;
      flex-shrink: 0;
      border-radius: 10px;
      background: #fff;
      box-shadow: 1px 1px 10px 0px rgba(173, 177, 179, 0.25);
   }
`
const H1 = styled.h1`
   color: #0a5271;
   text-align: center;
   font-size: 24px;
   font-family: Roboto;
   font-weight: 500;
   line-height: 30px;
   margin-bottom: 10px;
   @media (max-width: 390px) {
      color: #0a5271;
      text-align: center;
      font-size: 14px;
      font-family: Roboto;
      font-weight: 500;
      line-height: 30px;
      margin-bottom: 1px;
   }
`
const P = styled.p`
   color: #6b6b6b;
   text-align: center;
   font-size: 18px;
   font-family: Roboto;
   line-height: 30px;
   @media (max-width: 390px) {
      color: #6b6b6b;
      text-align: center;
      font-size: 10px;
      font-family: Roboto;
      line-height: 30px;
   }
`
const DVImg = styled.div`
   display: flex;
   width: 180px;
   height: 180px;
   padding: 10px;
   justify-content: center;
   align-items: center;
   margin-top: 44px;
   margin-bottom: 66px;
   flex-shrink: 0;
   border-radius: 100%;
   background: #fff;
   box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
   @media (max-width: 390px) {
      display: flex;
      width: 80px;
      height: 80px;
      padding: 5px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      margin-top: 40px;
      margin-bottom: 27px;
   }
`
const Img = styled.img`
   width: 160px;
   height: 160px;
   flex-shrink: 0;
   border-radius: 100%;
   @media (max-width: 390px) {
      width: 70px;
      height: 70px;
      flex-shrink: 0;
      border-radius: 100%;
   }
`
