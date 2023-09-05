import React from 'react'
import styled from 'styled-components'
// import MainVideo from ''

const MainContent = () => {
   return (
      <Container>
         <BackgroundVideo autoPlay loop muted plays-inline>
            <source src="MainVideo" type="video/mp4" />
         </BackgroundVideo>

         <TextContainer>
            <TextItkg>IT KG - it Мектеби</TextItkg>
            <InformationText>
               Но высококачественный прототип будущего проекта способствует
               подготовке и реализации как самодостаточных, так и внешне
               зависимых концептуальных решений. классическом представлении,
               допускает внедрение новых предложений.
            </InformationText>
         </TextContainer>
      </Container>
   )
}

export default MainContent
const Container = styled.div`
   width: 100%;
   height: 90vh;
   background: rgba(0, 0, 0, 0.4);
`
const BackgroundVideo = styled.video`
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
   object-fit: cover;
   min-width: 100%;
   min-height: 100vh;
   @media (min-aspect-ratio: 16/9) {
      width: 100%;
      height: auto;
   }
   @media (min-aspect-ratio: 16/9) {
      width: 100%;
      height: 100%;
   }
   @media screen and (max-width: 390px) {
      max-width: 100%;
      height: 100vh;
   }
   @media (max-width: 912px) {
      max-width: 100%;
      height: 100vh;
   }
`
const TextContainer = styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
`
const TextItkg = styled.h1`
   color: #ffffff;
   font-size: 64px;
   font-family: 'Roboto', sans-serif;
   font-weight: 500;
   line-height: 70px;
   margin-top: 290px;
   @media screen and (max-width: 390px) {
      font-size: 24px;
      margin-top: 290px;
   }
   @media (max-width: 912px) {
      font-size: 24px;
      margin-top: 290px;
   }
`
const InformationText = styled.p`
   color: #ffffff;
   font-weight: 300;
   font-family: 'Roboto', sans-serif;
   font-size: 22px;
   line-height: 27px;
   width: 1089px;
   text-align: center;
   margin-top: 10px;
   @media screen and (max-width: 390px) {
      width: 383px;
      font-size: 12px;
      line-height: 16px;
   }
   @media (max-width: 912px) {
      width: 383px;
      font-size: 12px;
      line-height: 16px;
   }
`
