import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
   instagramLinkUpdate,
   telegramLinkUpdate,
   tiktokLinkUpdate,
   whatsappLinkUpdate,
   youtubeLinkUpdate,
} from '../../store/actions/ActionSocialNetworks'

const AdminForm = () => {
   const dispatch = useDispatch()

   const telegram = useRef(null)
   const whatsapp = useRef(null)
   const youtube = useRef(null)
   const tiktok = useRef(null)
   const instagram = useRef(null)
   const telegramUpdateHandler = () => {
      const telegramValue = telegram.current.value
         .split('')
         .filter((e) => e.trim().length)
         .join('')
      dispatch(telegramLinkUpdate(telegramValue))
      telegram.current.value = ''
   }
   const whatsappUpdateHandler = () => {
      const whatsappValue = whatsapp.current.value
         .split('')
         .filter((e) => e.trim().length)
         .join('')
      dispatch(whatsappLinkUpdate(whatsappValue))
      whatsapp.current.value = ''
   }
   const youtubeUpdateHandler = () => {
      dispatch(youtubeLinkUpdate(youtube.current.value))
      youtube.current.value = ''
   }
   const tiktokUpdateHandler = () => {
      dispatch(tiktokLinkUpdate(tiktok.current.value))
      tiktok.current.value = ''
   }
   const instagramUpdateHandler = () => {
      dispatch(instagramLinkUpdate(instagram.current.value))
      instagram.current.value = ''
   }
   return (
      <StyledForm>
         <BlockInputs>
            <CardInputs>
               <label htmlFor="telegram">Telegram name</label>
               <StyledInput ref={telegram} type="text" id="telegram" />
               <ButtonStyled onClick={telegramUpdateHandler}>
                  Өзгөртүү
               </ButtonStyled>
               <hr />
            </CardInputs>
            <CardInputs>
               <label htmlFor="whatsapp">Whatsapp number</label>
               <StyledInput type="text" id="whatsapp" ref={whatsapp} />
               <ButtonStyled onClick={whatsappUpdateHandler}>
                  Өзгөртүү
               </ButtonStyled>
               <hr />
            </CardInputs>
         </BlockInputs>
         <BlockInputs>
            <CardInputs>
               <label htmlFor="tiktok">Tiktok name</label>
               <StyledInput ref={tiktok} type="text" id="tiktok" />
               <ButtonStyled onClick={tiktokUpdateHandler}>
                  Өзгөртүү
               </ButtonStyled>
               <hr />
            </CardInputs>
            <CardInputs>
               <label htmlFor="youtube">Youtube name</label>
               <StyledInput ref={youtube} type="text" id="youtube" />
               <ButtonStyled onClick={youtubeUpdateHandler}>
                  Өзгөртүү
               </ButtonStyled>
               <hr />
            </CardInputs>
         </BlockInputs>
         <CardInput>
            <label htmlFor="instagram">Instagram name</label>
            <StyledInput ref={instagram} type="text" id="instagram" />
            <ButtonStyled onClick={instagramUpdateHandler}>
               Өзгөртүү
            </ButtonStyled>
            <hr />
         </CardInput>
      </StyledForm>
   )
}

export default AdminForm

const StyledForm = styled.div`
   width: 800px;
   min-height: 500px;
   background: #e5e5e5;
   border: 2px solid #0a5271;
   margin: 0 auto;
   color: #0a5271;
   margin-bottom: 20px;
   margin-top: 20px;
   font-family: 'Roboto';
   @media (max-width: 390px) {
      width: 95%;
      display: flex;
      flex-direction: column;
   }
`

const ButtonStyled = styled.button`
   width: 100px;
   color: #ffffff;
   border: none;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 30px;
   background: #0a5271;

   box-shadow: 0px 25px 30px 20px rgba(10, 82, 113, 0.15);
`
const BlockInputs = styled.div`
   display: flex;
   @media (max-width: 390px) {
      display: flex;
      flex-direction: column;
   }
`
const CardInputs = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   width: 398px;
   height: 150px;
   border: 2px solid #0a5271;
   margin: 20px;
   box-shadow: 0px 10px 50px 10px rgba(0, 0, 0, 0.9);
   padding-left: 10px;
   padding-right: 10px;
   @media (max-width: 390px) {
      width: 90%;
   }
`
const CardInput = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   width: 360px;
   height: 150px;
   border: 2px solid #0a5271;
   margin: 20px;
   box-shadow: 0px 10px 50px 10px rgba(0, 0, 0, 0.9);
   padding-left: 10px;
   margin-left: 215px;
   @media (max-width: 390px) {
      margin-left: 20px;
      width: 90%;
   }
`
const StyledInput = styled.input`
   outline: none;
   width: 90%;
   border: 2px solid #0a5271;
   border-radius: 3px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #828282;
   padding-left: 6px;
`
