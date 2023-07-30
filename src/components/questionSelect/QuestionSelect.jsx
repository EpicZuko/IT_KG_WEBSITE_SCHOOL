import React, { useState } from 'react'
import styled from 'styled-components'
import Logo2 from '../../assets/icons/arrow-down (1).png'
import Logo from '../../assets/icons/arrow-down.png'
import { data } from '../../utils/constants/category'

const QuestionSelect = () => {
   const [selected, setSelected] = useState(false)

   // eslint-disable-next-line consistent-return
   function toggle(i) {
      if (selected === i) {
         return setSelected(null)
      }
      setSelected(i)
   }

   return (
      <div>
         <div>
            <H2>Эң көп берилүүчү суроолор</H2>
         </div>
         <Div>
            {data.map((text, i) => (
               <Container color={selected === i} onClick={() => toggle(i)}>
                  <Card>
                     <Dot color={selected === i} />
                     <QuestionText>{text.question}</QuestionText>
                     <ImgStyled src={selected === i ? Logo2 : Logo} alt="" />
                  </Card>
                  {selected === i && <AnswerText>{text.answer}</AnswerText>}
               </Container>
            ))}
         </Div>
      </div>
   )
}

export default QuestionSelect
function backgroundColor({ color }) {
   return color ? '#0A5271' : '#dfd4d4'
}
function colorText({ color }) {
   return color ? 'white' : '#242424'
}
function dotColor({ color }) {
   return !color ? '#0A5271' : '#dfd4d4'
}
function hoverColor({ color }) {
   return color ? '#0A5271' : '#fbfbfb'
}
const H2 = styled.h2`
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
   margin-bottom: 40px;
   @media (max-width: 390px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   @media (max-width: 912px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`
const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background: #dfd4d4;
   padding-top: 72px;
   padding-bottom: 169px;
   @media (max-width: 390px) {
      padding-top: 31px;
      padding-bottom: 59px;
   }
   @media (max-width: 912px) {
      padding-top: 31px;
      padding-bottom: 59px;
   }
`
const Container = styled.div`
   background-color: ${backgroundColor};
   width: 1100px;
   color: ${colorText};
   min-height: 55px;
   border-bottom: 1px solid #9d9d9d;
   transition: 0.5s ease-out;
   &:hover {
      background-color: ${hoverColor};
   }
   @media (max-width: 390px) {
      width: 370px;
   }
   @media (max-width: 912px) {
      width: 100%;
   }
`
const Card = styled.div`
   display: grid;
   grid-template-columns: 0.3fr 3.6fr 0.2fr;
   align-items: center;
   height: 55px;
   @media (max-width: 390px) {
      display: grid;
      grid-template-columns: 0.1fr 1fr 0.1fr;
      align-items: center;
   }
   @media (max-width: 912px) {
      display: grid;
      grid-template-columns: 0.1fr 1fr 0.1fr;
      align-items: center;
   }
`

const Dot = styled.div`
   width: 6px;
   height: 6px;
   background-color: ${dotColor};
   margin-left: 30px;
   @media (max-width: 390px) {
      margin-left: 14px;
   }
   @media (max-width: 912px) {
      margin-left: 14px;
   }
`
const QuestionText = styled.p`
   font-weight: 400;
   font-size: 20px;
   line-height: 23.44px;
   @media (max-width: 390px) {
      font-size: 14px;
   }
   @media (max-width: 912px) {
      font-size: 14px;
   }
`

const AnswerText = styled.div`
   margin-left: 30px;
   font-weight: 400;
   font-size: 16px;
   line-height: 18.75px;
   width: 830px;
   color: #b5b5b5;
   padding-bottom: 10px;
   animation: fadeIn 0.2s ease-in-out;
   @keyframes fadeIn {
      0% {
         opacity: 0;
         transform: translateY(2rem);
      }
      100% {
         opacity: 1;
         transform: translateY(0);
      }
   }
   @media (max-width: 390px) {
      font-size: 12px;
      width: 340px;
   }
   @media (max-width: 912px) {
      font-size: 12px;
      width: 340px;
   }
`
const ImgStyled = styled.img`
   width: 24px;
   height: 24px;
   @media (max-width: 390px) {
      width: 16px;
      height: 16px;
   }
   @media (max-width: 912px) {
      width: 16px;
      height: 16px;
   }
`
