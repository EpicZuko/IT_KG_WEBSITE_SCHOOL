import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line import/no-cycle
import { sliderArray } from '../../utils/constants/category'

// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/effect-coverflow'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation'

export default function AboutProject() {
   const [isScroll, setIsScroll] = useState(false)
   const scrollHeader = () => {
      if (window.scrollY > 2980) {
         return true
      }
      return false
   }
   const scrollHandler = useCallback(() => {
      if (scrollHeader()) setIsScroll(true)
      else setIsScroll(false)
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', () => scrollHandler())

      return () => window.removeEventListener('scroll', scrollHandler)
   }, [scrollHandler])
   return (
      <DivContainer>
         <StyledSwiper
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            modules={[Navigation, Pagination, EffectCoverflow]}
            centeredSlides
         >
            {sliderArray?.map((elem) => (
               <StyledSwiperSlide key={elem.id}>
                  <DivSwiper>
                     <H2>Студенттердин проектери</H2>
                     <Div>
                        <div>
                           <Img
                              src={elem?.img}
                              alt="img"
                              className={isScroll === true ? 'scrollCard' : ''}
                           />
                        </div>
                        <DivScroll
                           className={isScroll === true ? 'scrollCard' : ''}
                        >
                           <H1>{elem?.name}</H1>
                           <P>{elem?.text}</P>
                           <ul>
                              {elem?.list.map((list) => (
                                 <Li key={list.id}>{list?.name}</Li>
                              ))}
                           </ul>
                        </DivScroll>
                     </Div>
                  </DivSwiper>
               </StyledSwiperSlide>
            ))}
         </StyledSwiper>
      </DivContainer>
   )
}
const StyledSwiperSlide = styled(SwiperSlide)`
   width: 100%;
   height: 100%;
`
const StyledSwiper = styled(Swiper)`
   height: 657px;
   width: 100%;
   @media (max-width: 375px) {
      height: 707px;
      width: 100%;
   }
   @media (max-width: 912px) {
      height: 707px;
      width: 100%;
   }
`
const DivContainer = styled.div`
   width: 100%;
   height: 100%;
   @media (max-width: 375px) {
      margin-bottom: 176px;
   }
   @media (max-width: 912px) {
      margin-bottom: 176px;
   }
`
const DivSwiper = styled.div`
   background: white;
`
const H2 = styled.h2`
   text-align: center;
   color: #0a5271;
   font-family: Roboto;
   font-size: 30px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 2.1px;
   @media (max-width: 375px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
   }
   @media (max-width: 912px) {
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
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-around;
   padding-top: 78px;
   @media (max-width: 375px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 40px;
      width: 100%;
      height: 100%;
   }
   @media (max-width: 912px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 40px;
      width: 100%;
      height: 100%;
   }
`
const H1 = styled.h1`
   width: 207.002px;
   color: #0a5271;
   font-family: Roboto;
   font-size: 30px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: 2.1px;
   border-bottom: 1px solid #0a5271;
   text-align: center;
   margin-top: 59px;
   padding-bottom: 14px;
   margin-bottom: 34px;
   @media (max-width: 375px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.68px;
      padding-bottom: 9px;
      margin-left: 20px;
      margin-top: 16px;
   }
   @media (max-width: 912px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.68px;
      padding-bottom: 9px;
      margin-left: 20px;
      margin-top: 16px;
   }
`
const Img = styled.img`
   width: 847px;
   height: 494px;
   flex-shrink: 0;
   box-shadow: 0px 25px 50px 20px rgba(2, 22, 31, 0.15);
   &.scrollCard {
      animation: img 1s ease-in-out;
      @keyframes img {
         0% {
            opacity: 0;
            transform: translateX(-19rem);
         }
         100% {
            opacity: 1;
            transform: translateX(0);
         }
      }
   }
   @media (max-width: 375px) {
      width: 360px;
      height: 209.965px;
      flex-shrink: 0;
   }
   @media (max-width: 912px) {
      width: 360px;
      height: 209.965px;
      flex-shrink: 0;
   }
`
const P = styled.p`
   display: flex;
   width: 289px;
   flex-direction: column;
   flex-shrink: 0;
   color: #000;
   font-family: Roboto;
   font-size: 18px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 1.26px;
   margin-bottom: 66px;
   @media (max-width: 375px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      flex-shrink: 0;
      margin-bottom: 16px;
   }
   @media (max-width: 912px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      flex-shrink: 0;
      margin-bottom: 16px;
   }
`
const DivScroll = styled.div`
   &.scrollCard {
      animation: gift-me 1s ease-in-out;
      @keyframes gift-me {
         0% {
            opacity: 0;
            transform: translateY(-19rem);
         }
         100% {
            opacity: 1;
            transform: translateY(0);
         }
      }
   }
`
const Li = styled.li`
   margin-bottom: 18px;
   @media (max-width: 375px) {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   @media (max-width: 912px) {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`
