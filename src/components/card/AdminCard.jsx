import React, { useState } from 'react'
import styled from 'styled-components'
import frameBackground from '../../assets/frameBackground.png'
import onIcon from '../../assets/icons8-slide-up-50 (1).png'
import upIcon from '../../assets/icons8-slide-up-50.png'

const AdminCard = () => {
   const [graduates, setGraduates] = useState(20)
   const [students, setStudents] = useState(50)
   const [job, setJob] = useState(10)
   const icrementGraduatesHandler = () => {
      setGraduates((prevState) => {
         return prevState + 10
      })
   }
   const dicrementGraduatesHandler = () => {
      if (graduates > 1) {
         setGraduates((prevState) => {
            return prevState - 10
         })
      }
   }
   const icrementStudentsHandler = () => {
      setStudents((prevState) => {
         return prevState + 10
      })
   }
   const dicrementStudentsHandler = () => {
      if (students > 1) {
         setStudents((prevState) => {
            return prevState - 10
         })
      }
   }
   const icrementJobHandler = () => {
      setJob((prevState) => {
         return prevState + 10
      })
   }
   const dicrementJobHandler = () => {
      if (job > 1) {
         setJob((prevState) => {
            return prevState - 10
         })
      }
   }
   return (
      <div>
         <DIV style={{ backgroundImage: `url(${frameBackground})` }}>
            <Div>
               <div>
                  <H35>
                     {graduates}
                     <Span>+</Span>
                     <Counters>
                        <CounterIcon
                           onClick={icrementGraduatesHandler}
                           src={upIcon}
                           alt=""
                        />
                        <CounterIcon
                           onClick={dicrementGraduatesHandler}
                           src={onIcon}
                           alt=""
                        />
                     </Counters>
                  </H35>
                  <P>Бүтурүүчүлөр</P>
               </div>
               <div>
                  <H100>
                     {students}
                     <Span>+</Span>
                     <Counters>
                        <CounterIcon
                           onClick={icrementStudentsHandler}
                           src={upIcon}
                           alt=""
                        />
                        <CounterIcon
                           onClick={dicrementStudentsHandler}
                           src={onIcon}
                           alt=""
                        />
                     </Counters>
                  </H100>
                  <P>Окуучулар</P>
               </div>
               <div>
                  <H25>
                     {job}
                     <Span>+</Span>
                     <Counters>
                        <CounterIcon
                           onClick={icrementJobHandler}
                           src={upIcon}
                           alt=""
                        />
                        <CounterIcon
                           onClick={dicrementJobHandler}
                           src={onIcon}
                           alt=""
                        />
                     </Counters>
                  </H25>
                  <P>Жумушка орношкондор</P>
               </div>
            </Div>
         </DIV>
      </div>
   )
}

export default AdminCard

const DIV = styled.div`
   width: 100%;
   height: 375px;
   @media (max-width: 280px) {
      width: 100%;
   }
   @media (max-width: 375px) {
      width: 100%;
      height: 220px;
   }
   @media (max-width: 390px) {
      width: 100%;
      height: 220px;
   }
   @media (max-width: 414px) {
      width: 100%;
      height: 220px;
   }
   @media (max-width: 820px) {
      width: 100%;
      height: 220px;
   }
   @media (max-width: 912px) {
      width: 100%;
      height: 220px;
   }
`
const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding-top: 160px;

   @media (max-width: 280px) {
      padding-top: 10px;
      display: flex;
      flex-wrap: wrap;
   }
   @media (max-width: 375px) {
      padding-top: 76px;
   }
   @media (max-width: 390px) {
      padding-top: 76px;
   }
   @media (max-width: 414px) {
      padding-top: 76px;
   }
   @media (max-width: 820px) {
      padding-top: 76px;
   }
   @media (max-width: 912px) {
      padding-top: 76px;
   }
`
const H35 = styled.h2`
   color: #fff;
   text-align: center;
   font-family: Inter;
   font-size: 54px;
   font-style: normal;
   font-weight: 500;
   line-height: 100%;
   border-bottom: 1px solid #fff;
   display: inline-flex;
   padding: 2px 27px 1px 27px;
   justify-content: center;
   align-items: center;
   @media (max-width: 375px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
   @media (max-width: 390px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
   @media (max-width: 414px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
   @media (max-width: 820px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
   @media (max-width: 912px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
`
const H100 = styled.h2`
   color: #fff;
   text-align: center;
   font-family: Inter;
   font-size: 54px;
   font-style: normal;
   font-weight: 500;
   line-height: 100%;
   border-bottom: 1px solid #fff;
   display: inline-flex;
   padding: 2px 27px 1px 27px;
   justify-content: center;
   align-items: center;
   @media (max-width: 375px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      border-bottom: 1px solid #fff;
   }
   @media (max-width: 390px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      border-bottom: 1px solid #fff;
   }
   @media (max-width: 414px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      border-bottom: 1px solid #fff;
   }
   @media (max-width: 820px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      border-bottom: 1px solid #fff;
   }
   @media (max-width: 912px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      border-bottom: 1px solid #fff;
   }
`
const H25 = styled.h2`
   color: #fff;
   text-align: center;
   font-family: Inter;
   font-size: 54px;
   font-style: normal;
   font-weight: 500;
   line-height: 100%;
   border-bottom: 1px solid #fff;
   display: inline-flex;
   padding: 2px 27px 1px 27px;
   justify-content: center;
   align-items: center;
   @media (max-width: 375px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
   @media (max-width: 390px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
   @media (max-width: 414px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
   @media (max-width: 820px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
   @media (max-width: 912px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
   }
`
const Span = styled.span`
   color: #fff;
   text-align: center;
   font-family: Inter;
   font-size: 54px;
   font-style: normal;
   font-weight: 900;
   line-height: 100%;
   display: inline-flex;
   padding: 2px 27px 1px 27px;
   justify-content: center;
   align-items: center;
   @media (max-width: 375px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      display: inline-flex;
      padding: 4px 5px 7px 5px;
      justify-content: center;
      align-items: center;
   }
   @media (max-width: 390px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      display: inline-flex;
      padding: 4px 5px 7px 5px;
      justify-content: center;
      align-items: center;
   }
   @media (max-width: 414px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      display: inline-flex;
      padding: 4px 5px 7px 5px;
      justify-content: center;
      align-items: center;
   }
   @media (max-width: 820px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      display: inline-flex;
      padding: 4px 5px 7px 5px;
      justify-content: center;
      align-items: center;
   }
   @media (max-width: 912px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      display: inline-flex;
      padding: 4px 5px 7px 5px;
      justify-content: center;
      align-items: center;
   }
`
const P = styled.p`
   color: #fff;
   text-align: center;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   margin-top: 13px;
   @media (max-width: 375px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      margin-top: 6px;
      line-height: 120%;
   }
   @media (max-width: 390px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      margin-top: 6px;
      line-height: 120%;
   }
   @media (max-width: 414px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      margin-top: 6px;
      line-height: 120%;
   }
   @media (max-width: 820px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      margin-top: 6px;
      line-height: 120%;
   }
   @media (max-width: 912px) {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      margin-top: 6px;
      line-height: 120%;
   }
`
const Counters = styled.div`
   display: flex;
   flex-direction: column;
`
const CounterIcon = styled.img`
   width: 20px;
   &:hover {
      background-color: rgba(162, 162, 162, 0.3);
      border-radius: 12px;
   }
   &:active {
      background-color: #0a5271;
   }
   @media (max-width: 390px) {
      width: 15px;
   }
`
