import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import java from '../../assets/java.png'
import hibernate from '../../assets/jbc.png'
import js from '../../assets/js.png'
import mui from '../../assets/mui.png'
import ReactIcons from '../../assets/react.png'
import ReduxIcons from '../../assets/redux.png'
import springboot from '../../assets/springboot.png'
import springmvc from '../../assets/springmvc.png'
import Card from '../UI/Card'

const Cards = () => {
   const [isScroll, setIsScroll] = useState(false)
   const scrollHeader = () => {
      if (document.documentElement.scrollTop > 200) {
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
      <div>
         <div>
            <H1>Биздин окуу жайдагы программалоо багыттары:</H1>
         </div>
         <DIV>
            <DIVCARD className={isScroll === true ? 'scrollCard' : ''}>
               <Card>
                  <DivFront>
                     <H3>FRONTEND - JAVASCRIPT </H3>
                     <Span>(6 ай окуу 3 ай практика)</Span>
                  </DivFront>
                  <UL>
                     <div>
                        <Li>
                           <img src={js} alt="javaScript" />
                           <SpanFront>JavaScript</SpanFront>
                        </Li>
                        <Li>
                           <img src={html} alt="html" />
                           <SpanFront>HTML</SpanFront>
                        </Li>
                        <Li>
                           <img src={css} alt="css" />
                           <SpanFront>CSS</SpanFront>
                        </Li>
                        <Li>
                           <img src={ReactIcons} alt="react" />
                           <SpanFront>React</SpanFront>
                        </Li>
                     </div>
                     <div>
                        <Li>
                           <img src={mui} alt="mui" />
                           <SpanFront>MUI</SpanFront>
                        </Li>
                        <Li>
                           <img src={ReduxIcons} alt="Redux" />
                           <SpanFront>Redux</SpanFront>
                        </Li>
                     </div>
                  </UL>
               </Card>
            </DIVCARD>
            <DIVEND className={isScroll === true ? 'scrollCard' : ''}>
               <Card>
                  <DivBackEnd>
                     <H4>BACKEND - JAVA</H4>
                     <Span>(6 ай окуу 3 ай практика)</Span>
                  </DivBackEnd>
                  <Ul>
                     <div>
                        <Li>
                           <img src={java} alt="java" />
                           <SpanEnd>Java</SpanEnd>
                        </Li>
                        <Li>
                           <img src={java} alt="JDBC" />
                           <SpanEnd>JDBC</SpanEnd>
                        </Li>
                        <Li>
                           <img src={hibernate} alt="Hibernate" />
                           <SpanEnd>Hibernate</SpanEnd>
                        </Li>
                     </div>
                     <div>
                        <Li>
                           <img src={springboot} alt="Spring boot" />
                           <SpanEnd>Spring boot</SpanEnd>
                        </Li>
                        <Li>
                           <img src={springmvc} alt="Sring MVC" />
                           <SpanEnd>Spring MVC</SpanEnd>
                        </Li>
                     </div>
                  </Ul>
               </Card>
            </DIVEND>
         </DIV>
      </div>
   )
}

export default Cards
const DIV = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin-bottom: 275px;
   @media (max-width: 1800px) {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 96px;
   }
   @media (max-width: 1150px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 96px;
   }
   @media (max-width: 912px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 96px;
   }
   @media (max-width: 820px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 96px;
   }
   @media (max-width: 414px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 96px;
   }
   @media (max-width: 390px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 96px;
   }
`
const H1 = styled.h3`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #0a5271;
   font-family: Roboto;
   font-size: 30px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 2.1px;
   margin-bottom: 73px;
   margin-top: 40px;
   @media (max-width: 390px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      margin-bottom: 45px;
      margin-left: 16px;
      margin-right: 16px;
   }
   @media (max-width: 414px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      margin-bottom: 45px;
      margin-left: 16px;
      margin-right: 16px;
   }
   @media (max-width: 820px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      margin-bottom: 45px;
      margin-left: 16px;
      margin-right: 16px;
   }
   @media (max-width: 912px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      margin-bottom: 45px;
      margin-left: 16px;
      margin-right: 16px;
   }
`
const DIVCARD = styled.div`
   &.scrollCard {
      animation: front 0.6s ease-in-out;
      @keyframes front {
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
   @media (max-width: 1800px) {
      margin-bottom: 42px;
   }
   @media (max-width: 1150px) {
      margin-bottom: 42px;
   }
   @media (max-width: 912px) {
      margin-bottom: 42px;
   }
   @media (max-width: 820px) {
      margin-bottom: 42px;
   }
   @media (max-width: 414px) {
      margin-bottom: 42px;
   }
   @media (max-width: 390px) {
      margin-bottom: 42px;
   }
`
const DIVEND = styled.div`
   &.scrollCard {
      animation: back 0.6s ease-in-out;
      @keyframes back {
         0% {
            opacity: 0;
            transform: translateX(19rem);
         }
         100% {
            opacity: 1;
            transform: translateY(0);
         }
      }
   }
   @media (max-width: 390px) {
      margin-bottom: 42px;
   }
   @media (max-width: 414px) {
      margin-bottom: 42px;
   }
   @media (max-width: 820px) {
      margin-bottom: 42px;
   }
   @media (max-width: 912px) {
      margin-bottom: 42px;
   }
   @media (max-width: 1800px) {
      margin-bottom: 42px;
   }
`
const DivFront = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding-top: 56px;
   @media (max-width: 390px) {
      display: flex;
      margin-left: 20px;
   }
   @media (max-width: 414px) {
      display: flex;
      margin-left: 20px;
   }
   @media (max-width: 820px) {
      display: flex;
      margin-left: 20px;
   }
   @media (max-width: 912px) {
      display: flex;
      margin-left: 20px;
   }
`
const H3 = styled.h3`
   color: #0a5271;
   font-family: Roboto;
   font-size: 24px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   letter-spacing: 2.4px;
   @media (max-width: 390px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      width: 350px;
   }
   @media (max-width: 414px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      width: 350px;
   }
   @media (max-width: 820px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      width: 350px;
   }
   @media (max-width: 912px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      width: 350px;
   }
`
const Span = styled.span`
   color: var(--black, #3a3a3a);
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   @media (max-width: 390px) {
      color: var(--black, #3a3a3a);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      width: 100px;
   }
   @media (max-width: 414px) {
      color: var(--black, #3a3a3a);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      width: 100px;
   }
   @media (max-width: 820px) {
      color: var(--black, #3a3a3a);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      width: 100px;
   }
   @media (max-width: 912px) {
      color: var(--black, #3a3a3a);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      width: 100px;
   }
`
const UL = styled.ul`
   display: flex;
   justify-content: space-around;
   width: 450px;
   margin-top: 34px;
   @media (max-width: 390px) {
      display: flex;
      justify-content: space-around;
      width: 308px;
      margin-top: 34px;
   }
   @media (max-width: 414px) {
      display: flex;
      justify-content: space-around;
      width: 308px;
      margin-top: 34px;
   }
   @media (max-width: 820px) {
      display: flex;
      justify-content: space-around;
      width: 308px;
      margin-top: 34px;
   }
   @media (max-width: 912px) {
      display: flex;
      justify-content: space-around;
      width: 308px;
      margin-top: 34px;
   }
`
const Li = styled.li`
   display: flex;
   align-items: center;
   margin-bottom: 36px;
`
const SpanFront = styled.span`
   color: var(--black, #3a3a3a);
   font-family: Inter;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   margin-left: 14px;
   @media (max-width: 390px) {
      color: var(--black, #3a3a3a);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      width: 80px;
   }
   @media (max-width: 414px) {
      color: var(--black, #3a3a3a);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      width: 80px;
   }
   @media (max-width: 820px) {
      color: var(--black, #3a3a3a);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      width: 80px;
   }
   @media (max-width: 912px) {
      color: var(--black, #3a3a3a);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      width: 80px;
   }
`
const DivBackEnd = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding-top: 56px;
   width: 400px;
   @media (max-width: 390px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 260px;
      margin-left: 20px;
   }
   @media (max-width: 414px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 260px;
      margin-left: 20px;
   }
   @media (max-width: 820px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 260px;
      margin-left: 20px;
   }
   @media (max-width: 912px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 260px;
      margin-left: 20px;
   }
`
const H4 = styled.h3`
   color: #0a5271;
   font-family: Roboto;
   font-size: 24px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   letter-spacing: 2.4px;
   @media (max-width: 390px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      width: 350px;
   }
   @media (max-width: 414px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      width: 350px;
   }
   @media (max-width: 820px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      width: 350px;
   }
   @media (max-width: 912px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.8px;
      width: 350px;
   }
`
const Ul = styled.ul`
   display: flex;
   justify-content: space-between;
   width: 369px;
   margin-left: 42px;
   margin-top: 33px;
   @media (max-width: 390px) {
      display: flex;
      justify-content: space-between;
      width: 290px;
      margin-top: 34px;
      margin-left: 20px;
   }
   @media (max-width: 414px) {
      display: flex;
      justify-content: space-between;
      width: 290px;
      margin-top: 34px;
      margin-left: 20px;
   }
   @media (max-width: 820px) {
      display: flex;
      justify-content: space-between;
      width: 290px;
      margin-top: 34px;
      margin-left: 20px;
   }
   @media (max-width: 912px) {
      display: flex;
      justify-content: space-between;
      width: 290px;
      margin-top: 34px;
      margin-left: 20px;
   }
`
const SpanEnd = styled.span`
   margin-left: 14px;
   color: var(--black, #3a3a3a);
   font-family: Inter;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
`
