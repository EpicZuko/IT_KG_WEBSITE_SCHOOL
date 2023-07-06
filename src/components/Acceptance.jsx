import React from 'react'
import styled from 'styled-components'
import acceptance from '../assets/acceptance.png'
import Button from './UI/Button'
import Input from './UI/Input'

const Acceptance = () => {
   return (
      <DIV>
         <DIVIMG>
            <img src={acceptance} alt="error acceptance" />
         </DIVIMG>
         <div>
            <Form>
               <H1>Кабылдама</H1>
               <DIVNAME>
                  <Input placeholder="Аты жөнү" />
               </DIVNAME>
               <DIVNUMBER>
                  <Input placeholder="Телефон номери" />
               </DIVNUMBER>
               <DIVReason>
                  <Input placeholder="Кайрылууңуздун себеби" />
               </DIVReason>
               <DIVTEXT>
                  <Textarea placeholder="Кайрылууңуздун себеби" />
               </DIVTEXT>
               <DIVBTN>
                  <Button>Жөнөтүү</Button>
               </DIVBTN>
            </Form>
         </div>
      </DIV>
   )
}

export default Acceptance

const DIV = styled.div`
   display: flex;
   justify-content: space-evenly;
   @media (max-width: 390px) {
      margin-top: 134px;
      width: 360px;
   }
   @media (max-width: 414px) {
      margin-top: 134px;
      width: 360px;
      margin-left: 20px;
   }
   @media (max-width: 540px) {
      margin-top: 134px;
      width: 450px;
      margin-left: 20px;
   }
   @media (max-width: 820px) {
      margin-top: 134px;
      width: 560px;
      margin-left: 20px;
   }
`
const DIVIMG = styled.div`
   margin-top: 100px;
   @media (max-width: 390px) {
      display: none;
   }
   @media (max-width: 414px) {
      display: none;
   }
   @media (max-width: 540px) {
      display: none;
   }
   @media (max-width: 820px) {
      display: none;
   }
`
const Form = styled.form`
   display: flex;
   flex-direction: column;
   @media (max-width: 375px) {
      width: 360px;
      /* margin-left: 20px; */
      /* background: red; */
   }
   @media (max-width: 390px) {
      width: 360px;
      margin-left: 20px;
      /* background: red; */
   }
   @media (max-width: 414px) {
      width: 360px;
      padding-left: 30px;
   }
   @media (max-width: 540px) {
      width: 360px;
      padding-left: 30px;
   }
   @media (max-width: 820px) {
      width: 360px;
      padding-left: 30px;
   }
`
const H1 = styled.h1`
   margin-bottom: 50px;
   color: #0a5271;
   font-size: 30px;
   font-family: Roboto;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 2.1px;
   @media (max-width: 390px) {
      color: var(--main-color, #0a5271);
      text-align: center;
      font-size: 18px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 290px;
      margin-bottom: 25px;
   }
   @media (max-width: 414px) {
      color: var(--main-color, #0a5271);
      text-align: center;
      font-size: 18px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 290px;
      margin-bottom: 25px;
   }
   @media (max-width: 540px) {
      color: var(--main-color, #0a5271);
      text-align: center;
      font-size: 18px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 300px;
      margin-bottom: 25px;
   }
   @media (max-width: 820px) {
      color: var(--main-color, #0a5271);
      text-align: center;
      font-size: 18px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 300px;
      margin-bottom: 25px;
   }
`
const DIVNAME = styled.div`
   margin-bottom: 31px;
   @media (max-width: 375px) {
      margin-bottom: 11px;
      width: 360px;
   }
   @media (max-width: 390px) {
      margin-bottom: 11px;
      width: 360px;
   }
   @media (max-width: 414px) {
      margin-bottom: 11px;
      width: 360px;
   }
   @media (max-width: 540px) {
      margin-bottom: 11px;
      width: 360px;
   }
   @media (max-width: 820px) {
      margin-bottom: 11px;
      width: 360px;
   }
`
const DIVNUMBER = styled.div`
   margin-bottom: 36px;
   @media (max-width: 390px) {
      margin-bottom: 20px;
      width: 360px;
   }
   @media (max-width: 414px) {
      margin-bottom: 20px;
      width: 360px;
   }
   @media (max-width: 540px) {
      margin-bottom: 20px;
      width: 360px;
   }
   @media (max-width: 820px) {
      margin-bottom: 20px;
      width: 360px;
   }
`
const DIVReason = styled.div`
   display: none;
   @media (max-width: 390px) {
      margin-bottom: 41px;
      width: 360px;
      display: block;
   }
   @media (max-width: 414px) {
      margin-bottom: 41px;
      width: 360px;
      display: block;
   }
   @media (max-width: 540px) {
      margin-bottom: 41px;
      width: 360px;
      display: block;
   }
   @media (max-width: 820px) {
      margin-bottom: 41px;
      width: 360px;
      display: block;
   }
`
const DIVTEXT = styled.div`
   display: block;
   @media (max-width: 390px) {
      display: none;
   }
   @media (max-width: 414px) {
      display: none;
   }
   @media (max-width: 540px) {
      display: none;
   }
   @media (max-width: 820px) {
      display: none;
   }
   margin-bottom: 44px;
`
const Textarea = styled.textarea`
   width: 560px;
   height: 143px;
   padding: 18px 337px 84px 19px;
   flex-shrink: 0;
   outline: none;
   border: 2px solid #0a5271;
   border-radius: 3px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #828282;
   resize: none;
   @media only screen and (max-width: 375px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media only screen and (max-width: 390px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media only screen and (max-width: 414px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media only screen and (max-width: 820px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media only screen and (max-width: 912px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media only screen and (max-width: 1000px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
`
const DIVBTN = styled.div`
   @media (max-width: 390px) {
      margin-bottom: 41px;
      width: 360px;
   }
   @media (max-width: 414px) {
      margin-bottom: 41px;
      width: 360px;
   }
   @media (max-width: 540px) {
      margin-bottom: 41px;
      width: 360px;
   }
   @media (max-width: 820px) {
      margin-bottom: 41px;
      width: 360px;
   }
`
