import React from 'react'
import styled from 'styled-components'
// import ImageBackground from '../../assets/FrameBackground2.png'
import ImageNotbok from '../../assets/imageNotbok.png'
import Imagetelegram from '../../assets/imageTelegram.png'
import ImageTelevisor from '../../assets/imageTelevisor.svg'
import Card from '../UI/Card'

const Cardtages = () => {
   return (
      <DivContainer>
         <div>
            <H3>IT KG де окуунун артыкчылыктары</H3>
         </div>
         <DIV>
            <div>
               <Card variant="priority">
                  <Div>
                     <Img1 src={Imagetelegram} alt="telegram" />
                     <P>Окутуу нөлдөн junior го чейин</P>
                     <Text>
                        it kg автордук программасын бүтүп junior адиси болуңуз
                     </Text>
                  </Div>
               </Card>
            </div>
            <div>
               <Card variant="priority">
                  <Div2>
                     <Img2 src={ImageTelevisor} alt="error img" />
                     <P2>it kg де стажировкадан өтүү</P2>
                     <Text2>Реалдуу долбоорлор (проектер) менен иштөө</Text2>
                  </Div2>
               </Card>
            </div>
            <DivSolte>
               <Card variant="priority">
                  <Div3>
                     <Img3 src={ImageNotbok} alt="error img" />
                     <P3>Кампус</P3>
                     <Text3>
                        Биздин кампус жумасына 7 күн студенттер үчүн ачык.
                     </Text3>
                  </Div3>
               </Card>
               {/* <DivS
                  style={{
                     backgroundImage: `url(${ImageBackground})`,
                  }}
               /> */}
            </DivSolte>
         </DIV>
      </DivContainer>
   )
}

export default Cardtages
const DivContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const H3 = styled.h3`
   color: #0a5271;
   font-family: Roboto;
   font-size: 30px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: 2.1px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 55px;
   width: 1330px;
   @media (max-width: 375px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 100%;
      margin-bottom: 28px;
      margin-top: 55px;
   }
   @media (max-width: 375px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 100%;
      margin-bottom: 28px;
      margin-top: 55px;
   }
   @media (max-width: 390px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 100%;
      margin-bottom: 28px;
      margin-top: 55px;
   }
   @media (max-width: 414px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 100%;
      margin-bottom: 28px;
      margin-top: 55px;
   }
   @media (max-width: 820px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 100%;
      margin-bottom: 28px;
      margin-top: 55px;
   }
   @media (max-width: 912px) {
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.26px;
      width: 100%;
      margin-bottom: 28px;
      margin-top: 55px;
   }
`
const DIV = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 1330px;
   margin-bottom: 79px;
   @media (max-width: 375px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      height: 1000px;
      margin-top: -48px;
      margin-bottom: 105px;
   }
   @media (max-width: 390px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      height: 1000px;
      margin-top: -48px;
      margin-bottom: 105px;
   }
   @media (max-width: 414px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      height: 1000px;
      margin-top: -48px;
      margin-bottom: 105px;
   }
   @media (max-width: 820px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      height: 1000px;
      margin-top: -48px;
      margin-bottom: 105px;
   }
   @media (max-width: 912px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      height: 1000px;
      margin-top: -48px;
      margin-bottom: 105px;
   }
`
const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Img1 = styled.img`
   margin-top: 40px;
   cursor: pointer;
`
const P = styled.p`
   color: var(--blue, #3087d5);
   font-family: Roboto;
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 120%;
   margin-top: 20px;
`
const Text = styled.p`
   display: flex;
   width: 286px;
   flex-direction: column;
   flex-shrink: 0;
   color: var(--black, #3a3a3a);
   text-align: center;
   font-family: Roboto;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   margin-top: 14px;
`
const Div2 = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Img2 = styled.img`
   margin-top: 33px;
   cursor: pointer;
`
const P2 = styled.p`
   color: var(--blue, #3087d5);
   font-family: Roboto;
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 120%;
   margin-top: 27px;
`
const Text2 = styled.p`
   display: flex;
   width: 286px;
   flex-direction: column;
   flex-shrink: 0;
   color: var(--black, #3a3a3a);
   text-align: center;
   font-family: Roboto;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   margin-top: 18px;
`

const Div3 = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Img3 = styled.img`
   margin-top: 40px;
   cursor: pointer;
`
const P3 = styled.p`
   color: var(--blue, #3087d5);
   font-family: Roboto;
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 120%;
   margin-top: 24px;
`
const Text3 = styled.p`
   display: flex;
   width: 286px;
   flex-direction: column;
   flex-shrink: 0;
   color: var(--black, #3a3a3a);
   text-align: center;
   font-family: Roboto;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   margin-top: 14px;
`
const DivSolte = styled.div`
   position: relative;
`

// const DivS = styled.div`
//    width: 380px;
//    height: 327px;
//    position: absolute;
//    top: -50px;
//    left: 50px;
//    z-index: -1;
//    @media (max-width: 375px) {
//       display: none;
//    }
//    @media (max-width: 390px) {
//       display: none;
//    }
//    @media (max-width: 414px) {
//       display: none;
//    }
//    @media (max-width: 820px) {
//       display: none;
//    }
//    @media (max-width: 912px) {
//       width: 380px;
//       height: 327px;
//       position: absolute;
//       top: -34px;
//       left: 40px;
//       z-index: -1;
//    }
// `
