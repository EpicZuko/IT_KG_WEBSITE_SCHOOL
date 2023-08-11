import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import group from '../../../assets/group.png'
import instgram from '../../../assets/instagram.png'
import location from '../../../assets/location.png'
import telegram from '../../../assets/telegram.png'
import tiktok from '../../../assets/tiktok.png'
import whatsap from '../../../assets/whatsap.png'
import youtube from '../../../assets/youtube.png'

const Footer = () => {
   const { socialLink } = useSelector((state) => state.network)
   const whatsupLink = socialLink?.filter((link) => link.id === 1)
   const instagramLink = socialLink?.filter((link) => link.id === 5)
   const tiktokLink = socialLink?.filter((link) => link.id === 2)
   const youtubeLink = socialLink?.filter((link) => link.id === 3)
   const telegramLink = socialLink?.filter((link) => link.id === 4)
   return (
      <DIV>
         <Container>
            <DIVIMG>
               <img src={group} alt="error" />
               <P>© Copyright it.kg. All Rights Reserved</P>
            </DIVIMG>
            <ContainerFooter>
               <div>
                  <ul>
                     <Li target="blanket" href={instagramLink[0]?.link}>
                        <img src={instgram} alt="" />
                        <Span>it.kg</Span>
                     </Li>
                     <Li target="blanket" href={tiktokLink[0]?.link}>
                        <img src={tiktok} alt="" />
                        <Span>it kg tik tok</Span>
                     </Li>
                     <Li target="blanket" href={youtubeLink[0]?.link}>
                        <img src={youtube} alt="" />
                        <Span>youtube</Span>
                     </Li>
                  </ul>
               </div>
               <div>
                  <ul>
                     <Li target="blanket" href={whatsupLink[0]?.link}>
                        <img src={whatsap} alt="" />
                        <Span>{whatsupLink[0]?.username}</Span>
                     </Li>
                     <Li target="blanket" href={telegramLink[0]?.link}>
                        <img src={telegram} alt="" />
                        <Span>Telegram</Span>
                     </Li>
                     <Li>
                        <img src={location} alt="" />
                        <Span>Кочкор Ата Улица - 11</Span>
                     </Li>
                  </ul>
               </div>
            </ContainerFooter>
            <TEXT>© Copyright it.kg. All Rights Reserve</TEXT>
         </Container>
      </DIV>
   )
}

export default Footer

const DIV = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: flex-start;
   flex-wrap: wrap;
   flex-direction: row;
`
const Container = styled.div`
   width: 100%;
   flex-shrink: 0;
   background: #0a5271;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   @media screen and(max-width:280px) {
      width: 100%;
      height: 400px;
      flex-shrink: 0;
   }
   @media screen and(max-width:375px) {
      width: 100%;
      height: 400px;
      flex-shrink: 0;
   }
`
const DIVIMG = styled.div`
   margin-right: 193px;
   margin-top: 87px;

   @media screen and (max-width: 375px) {
      margin-left: 180px;
      width: 190px;
      height: 63px;
      flex-shrink: 0;
      margin-top: 33px;
   }
   @media (max-width: 414px) {
      margin-left: 180px;
      width: 190px;
      height: 63px;
      flex-shrink: 0;
      margin-top: 33px;
   }
   @media (max-width: 540px) {
      margin-left: 180px;
      width: 190px;
      height: 63px;
      flex-shrink: 0;
      margin-top: 33px;
   }
   @media (max-width: 820px) {
      margin-left: 180px;
      width: 190px;
      height: 63px;
      flex-shrink: 0;
      margin-top: 33px;
   }
   @media (max-width: 912px) {
      margin-left: 180px;
      width: 190px;
      height: 63px;
      flex-shrink: 0;
      margin-top: 33px;
   }
`
const ContainerFooter = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-top: 30px;
   width: 550px;
   @media screen and (max-width: 280px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   @media screen and (max-width: 375px) {
      display: flex;
      align-items: center;
   }
`

const Li = styled.a`
   display: flex;
   align-items: center;
   margin-bottom: 30px;
   text-decoration: none;
   @media screen and (max-width: 280px) {
      margin-top: 30px;
      display: flex;
      align-items: center;
   }
   @media screen and (max-width: 375px) {
      margin-left: 30px;
   }
   @media (max-width: 414px) {
      margin-left: 30px;
      margin-right: 10px;
   }
   @media (max-width: 540px) {
      margin-left: 30px;
      margin-right: 10px;
   }
   @media (max-width: 820px) {
      margin-left: 30px;
      margin-right: 10px;
   }
   @media (max-width: 912px) {
      margin-left: 30px;
      margin-right: 10px;
   }
`
const Span = styled.span`
   color: #fff;
   font-size: 16px;
   font-family: Roboto;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   margin-left: 23px;
   @media screen and(max-width: 280px) {
      margin-left: 20px;
   }
   @media screen and(max-width: 375px) {
      margin-left: 20px;
   }
`
const P = styled.p`
   margin-top: 65px;
   margin-bottom: 11px;
   color: #fff;
   font-size: 12px;
   font-family: Roboto;
   font-style: normal;
   font-weight: 400;
   line-height: normal;

   @media (max-width: 375px) {
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
   @media (max-width: 912px) {
      display: none;
   }
`
const TEXT = styled.p`
   display: none;
   @media (max-width: 280px) {
      display: block;
      color: #fff;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 110px;
      margin-left: -5px;
   }

   @media (max-width: 375px) {
      display: block;
      color: #fff;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 110px;
      margin-left: -5px;
   }
   @media (max-width: 414px) {
      display: block;
      color: #fff;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 110px;
      margin-left: -5px;
   }
   @media (max-width: 540px) {
      display: block;
      color: #fff;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 110px;
      margin-left: -5px;
   }
   @media (max-width: 820px) {
      display: block;
      color: #fff;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 110px;
      margin-left: -5px;
   }
   @media (max-width: 912px) {
      display: none;
      color: #fff;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 110px;
      margin-left: -5px;
   }
`
