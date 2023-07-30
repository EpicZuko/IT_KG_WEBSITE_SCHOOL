import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Bacdrop = (props) => {
   return <BackdropStyled onClick={props.onClose} />
}
const Modal = ({ onClose, children }) => {
   return (
      <div>
         {createPortal(
            <Bacdrop onClose={onClose} />,
            document.getElementById('backdrop')
         )}
         {createPortal(
            <ModalStyled>{children}</ModalStyled>,
            document.getElementById('backdrop')
         )}
      </div>
   )
}

export default Modal

const ModalStyled = styled.div`
   position: fixed;
   top: 20px;
   right: 0px;
   bottom: 0px;
   left: 0px;
   background-color: #ffffff;
   width: 700px;
   height: 600px;
   padding: 20px;
   z-index: 7;
   margin: 0 auto;
   border-radius: 12px;
   @media (max-width: 912px) {
      position: fixed;
      top: 66px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: #ffffff;
      width: 360px;
      height: 380px;
      z-index: 7;
      margin: 0 auto;
      border-radius: 12px;
   }
`
const BackdropStyled = styled.div`
   position: fixed;
   top: 0px;
   right: 0px;
   bottom: 0px;
   left: 0px;
   background: rgba(0, 0, 0, 0.25);
   z-index: 7;
`
