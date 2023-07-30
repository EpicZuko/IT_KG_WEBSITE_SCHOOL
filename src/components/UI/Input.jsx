import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Input = forwardRef(({ value, placeholder, ...rest }) => {
   return <StyledInput value={value} placeholder={placeholder} {...rest} />
})

export default Input

const StyledInput = styled.input`
   outline: none;
   width: 560px;
   height: 55px;
   border: 2px solid #0a5271;
   border-radius: 3px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #828282;
   padding-left: 16px;
   @media only screen and (max-width: 375px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media only screen and (max-width: 390px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media (max-width: 414px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media (max-width: 820px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
   @media (max-width: 912px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
`
