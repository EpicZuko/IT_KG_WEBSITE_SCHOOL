import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import adaptive from '../../../assets/adaptiv.svg'
import graycow from '../../../assets/photo-output__1_-removebg-preview.png'
import telephone from '../../../assets/telephone.svg'
import icons from '../../../assets/x.svg'
import { menuItems } from '../../../utils/constants/category'

const Header = ({ setAccentance }) => {
   const [isModal, setIsModal] = useState(false)
   const handlerOpenModal = () => {
      setIsModal(true)
   }
   const handlerCloseModal = () => {
      setIsModal(false)
   }
   const acceptanceHandler = (id) => {
      if (id === 5) {
         setAccentance(true)
      }
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
                  {menuItems.map((elem) => (
                     <LinkStyled
                        to={elem.to}
                        smooth
                        offset={-40}
                        duration={500}
                        onClick={() => acceptanceHandler(elem.id)}
                     >
                        <Img src={elem?.img} alt="" /> {elem?.title}
                     </LinkStyled>
                  ))}
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
                     {menuItems.map((elem) => (
                        <Listyled
                           to={elem.to}
                           smooth
                           offset={-50}
                           duration={500}
                           onClick={() => acceptanceHandler(elem.id)}
                        >
                           <ImgNumberAdaptive src={elem.img} alt="" />
                           {elem.title}
                        </Listyled>
                     ))}
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
   color: #fff;
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
   background: #0a5271;
   box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
   @media only screen and (max-width: 390px) {
      width: 100%;
      background: #0a5271;
      display: flex;
      justify-content: space-between;
   }
   @media only screen and (max-width: 912px) {
      width: 100%;
      background: #0a5271;
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
   @media only screen and (max-width: 912px) {
      display: block;
      margin-right: 15px;
   }
`
const ImgTelephone = styled.img`
   @media only screen and (max-width: 390px) {
      margin-right: 22.35px;
   }
   @media only screen and (max-width: 912px) {
      margin-right: 22.35px;
   }
`
const Imgcow = styled.img`
   margin-left: 100px;
   width: 100px;
   height: 100px;
   /* box-shadow: 1px 1px 10px black; */
   /* background: none !important; */
   @media only screen and (max-width: 390px) {
      margin-left: 25px;
   }
   @media only screen and (max-width: 912px) {
      margin-left: 25px;
   }
`
const Ul = styled.ul`
   display: flex;
   @media only screen and (max-width: 390px) {
      display: none;
   }
   @media only screen and (max-width: 912px) {
      display: none;
   }
`
const Img = styled.img`
   margin-right: 11.61px;
`
// const Span = styled.span`
//    font-family: 'Roboto';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 16px;
//    line-height: 19px;
//    color: #fff;
//    @media only screen and (max-width: 390px) {
//       color: #0a5271;
//       font-size: 16px;
//       font-family: Roboto;
//    }
//    @media only screen and (max-width: 912px) {
//       color: #0a5271;
//       font-size: 16px;
//       font-family: Roboto;
//    }
// `
const ContainerModalAdaptive = styled.div`
   display: none;
   @media (max-width: 390px) {
      display: flex;
      justify-content: center;
      align-items: center;
      /* position: relative; */
   }
   @media (max-width: 912px) {
      display: flex;
      justify-content: center;
      align-items: center;
      /* position: relative; */
   }
`
const Ulstyled = styled.ul`
   @media (max-width: 375px) {
      list-style: none;
      position: absolute;
      top: 44.52px;
      background: #0a5271;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   @media (max-width: 390px) {
      list-style: none;
      position: absolute;
      top: 44.52px;
      background: #0a5271;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   @media (max-width: 912px) {
      list-style: none;
      position: absolute;
      top: 65.52px;
      background: #0a5271;
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
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 19px;
      text-decoration: none;
   }
   @media only screen and (max-width: 912px) {
      list-style: none;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
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
   @media only screen and (max-width: 912px) {
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
   @media only screen and (max-width: 912px) {
      margin-right: 9.61px;
   }
`
