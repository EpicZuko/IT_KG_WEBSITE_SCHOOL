import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import adaptive from '../../../assets/adaptiv.png'
import graycow from '../../../assets/boss.png'
import telephone from '../../../assets/telephone.png'
import icons from '../../../assets/x.png'

const Header = () => {
   const [isModal, setIsModal] = useState(false)

   const handlerOpenModal = () => {
      setIsModal(true)
   }
   const handlerCloseModal = () => {
      setIsModal(false)
   }
   return (
      <>
         <ContainerStyled>
            <div>
               <Imgcow src={graycow} alt="gray cow" />
            </div>
            <div>
               <ContainerImg onClick={handlerOpenModal}>
                  <ImgTelephone src={telephone} alt="img" />
                  <img src={adaptive} alt="img" />
               </ContainerImg>
               <Ul>
                  <LinkStyled to="/kurstar">IT Курстар</LinkStyled>
                  <LinkStyled to="/about"> Биз жөнүнүндө</LinkStyled>
                  <LinkStyled to="/studentProjects">
                     Студенттердин проекттери
                  </LinkStyled>

                  <LinkStyled to="/ourteam">
                     <Span>Биздин команда</Span>
                  </LinkStyled>

                  <LinkStyled to="/phoneNumber">
                     <Img src={telephone} alt="" /> 0999444072
                  </LinkStyled>
               </Ul>
            </div>
         </ContainerStyled>
         {isModal &&
            createPortal(
               <ContainerModalAdaptive>
                  <Ulstyled>
                     <LiIcons onClick={handlerCloseModal}>
                        <img src={icons} alt="img" />
                     </LiIcons>

                     <Listyled to="/kurstar"> IT Курстар</Listyled>

                     <Listyled to="/about"> Биз жөнүнүндө</Listyled>

                     <Listyled to="/studentProjects">
                        Студенттердин проекттери
                     </Listyled>

                     <Listyled to="/ourteam">
                        <Span>Биздин команда</Span>
                     </Listyled>

                     <Listyled to="/phoneNumber">
                        <ImgNumberAdaptive src={telephone} alt="" /> 0999444072
                     </Listyled>
                  </Ulstyled>
               </ContainerModalAdaptive>,
               document.getElementById('modal')
            )}
      </>
   )
}

export default Header
const LinkStyled = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   list-style: none;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #3a3a3a;
   margin-right: 57px;
   cursor: pointer;
   text-decoration: none;
`
const ContainerStyled = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 68px;
   background: #ffffff;
   box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
   @media only screen and (max-width: 390px) {
      width: 100%;
      background: #ffffff;
      display: flex;
      justify-content: space-between;
   }
`
const ContainerImg = styled.div`
   display: none;
   @media only screen and (max-width: 390px) {
      display: block;
      margin-right: 15px;
   }
`
const ImgTelephone = styled.img`
   @media only screen and (max-width: 390px) {
      margin-right: 22.35px;
   }
`
const Imgcow = styled.img`
   margin-left: 125px;
   @media only screen and (max-width: 390px) {
      margin-left: 25px;
   }
`
const Ul = styled.ul`
   display: flex;
   @media only screen and (max-width: 390px) {
      display: none;
   }
`
const Img = styled.img`
   margin-right: 11.61px;
`
const Span = styled.span`
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #0a5271;
   @media only screen and (max-width: 390px) {
      color: #0a5271;
      font-size: 16px;
      font-family: Roboto;
   }
`
const ContainerModalAdaptive = styled.div`
   display: none;
   @media only screen and (max-width: 390px) {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`
const Ulstyled = styled.ul`
   @media only screen and (max-width: 390px) {
      list-style: none;
      position: relative;
      top: -15.52px;
      background: #ffffff;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
`
const Listyled = styled(Link)`
   @media only screen and (max-width: 390px) {
      list-style: none;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #3a3a3a;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 19px;
      text-decoration: none;
   }
`
const LiIcons = styled.li`
   @media only screen and (max-width: 390px) {
      position: absolute;
      left: 91%;
      right: 3.59%;
      top: 2.77%;
      bottom: 87.98%;
      cursor: pointer;
   }
`
const ImgNumberAdaptive = styled.img`
   @media only screen and (max-width: 390px) {
      margin-right: 9.61px;
   }
`
