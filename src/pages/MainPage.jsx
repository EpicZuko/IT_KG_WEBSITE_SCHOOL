import React, { useState } from 'react'
import styled from 'styled-components'
import Acceptance from '../components/acceptance/Acceptance'
import MainContent from '../components/main/MainContent'
import QuestionSelect from '../components/questionSelect/QuestionSelect'
import Robot from '../components/robot/Robot'
import Footer from '../components/UI/footer/Footer'
// eslint-disable-next-line import/no-cycle
import Header from '../components/UI/header/Header'
import Modal from '../components/UI/Modal'

import { menuItemsStuructur } from '../utils/constants/category'

const MainPage = () => {
   const [acceptance, setAccentance] = useState(false)

   const acceptanceHandlerClose = () => {
      setAccentance(false)
   }

   return (
      <Div>
         <Header setAccentance={setAccentance} />
         <Robot />
         <MainContent />
         {acceptance && (
            <Modal onClose={acceptanceHandlerClose}>
               <Acceptance />
            </Modal>
         )}
         {menuItemsStuructur.map((elem) => (
            <div id={elem.to}>{elem.page}</div>
         ))}
         <QuestionSelect />
         <Footer />
      </Div>
   )
}

export default MainPage

const Div = styled.div`
   background: white;
`
