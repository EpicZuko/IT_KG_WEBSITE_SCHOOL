import styled from 'styled-components'
import MainVideo from '../../assets/video/IMG_2988.mp4'

const MainContent = () => {
   return (
      <Container>
         <BackgroundVideo loop muted autoPlay>
            <source src={MainVideo} type="video/mp4" />
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
`
const BackgroundVideo = styled.video`
   width: 100%;
   height: 90vh;
   position: absolute;
   z-index: 0;
   object-fit: cover;
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
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   z-index: 10;
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
