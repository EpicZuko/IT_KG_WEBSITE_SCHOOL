import React from 'react'
import styled from 'styled-components'
import abouticon1 from '../../assets/aboutIcon/photo_2023-09-06_00-31-55.jpg'
import abouticon2 from '../../assets/aboutIcon/photo_2023-09-06_00-32-45.jpg'
import abouticon3 from '../../assets/aboutIcon/photo_2023-09-06_00-33-32.jpg'
import abouticon5 from '../../assets/aboutIcon/photo_2023-09-06_00-33-48.jpg'
import abouticon6 from '../../assets/aboutIcon/photo_2023-09-06_00-33-53.jpg'
import abouticon4 from '../../assets/aboutIcon/photo_2023-09-06_00-34-18.jpg'
import abouticon7 from '../../assets/aboutIcon/photo_2023-09-06_00-34-22.jpg'
import aboutwe1 from '../../assets/weAbout/aboutwe.png'
import aboutwe2 from '../../assets/weAbout/IMG_5249.jpg'
import aboutwe3 from '../../assets/weAbout/weabout3.jpg'

const About = () => {
   return (
      <div>
         <div>
            <H1>Биз жөнүндө</H1>
         </div>
         <Div>
            <div>
               <DIVIMG img={aboutwe1} />
            </div>
            <div>
               <DIVIMG img={aboutwe2} />
            </div>
            <div>
               <DIVIMG img={aboutwe3} />
            </div>
            <div>
               <DIVIMG img={abouticon1} />
            </div>
            <div>
               <DIVIMG img={abouticon2} />
            </div>
            <div>
               <DIVIMG img={abouticon3} />
            </div>
            <div>
               <DIVIMG img={abouticon4} />
            </div>
            <div>
               <DIVIMG img={abouticon5} />
            </div>
            <div>
               <DIVIMG img={abouticon6} />
            </div>
            <div>
               <DIVIMG img={abouticon7} />
            </div>
         </Div>
      </div>
   )
}

export default About
const H1 = styled.h1`
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
   margin-bottom: 63px;
   @media (max-width: 375px) {
      margin-bottom: 26px;
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
   }
   @media (max-width: 414px) {
      margin-bottom: 26px;
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
   }
   @media (max-width: 820px) {
      margin-bottom: 26px;
      color: #0a5271;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.26px;
   }
`
const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   flex-wrap: wrap;
   margin-bottom: 273px;
   @media (max-width: 375px) {
      margin-bottom: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      margin-left: -4px;
   }
   @media (max-width: 414px) {
      margin-bottom: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      margin-left: -4px;
   }
   @media (max-width: 820px) {
      margin-bottom: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      margin-left: -4px;
   }
`
const DIVIMG = styled.div`
   width: 327px;
   height: 242px;
   margin-left: 6px;
   margin-bottom: 28px;
   background-image: url(${(props) => props.img});
   background-size: 100%;
   background-repeat: no-repeat;
   background-position: center;
   @media (max-width: 375px) {
      width: 175px;
      height: 120px;
      flex-shrink: 0;
   }
   @media (max-width: 414px) {
      width: 175px;
      height: 120px;
      flex-shrink: 0;
   }
   @media (max-width: 820px) {
      width: 175px;
      height: 120px;
      flex-shrink: 0;
   }
`
