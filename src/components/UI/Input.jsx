import React from 'react'
import styled from 'styled-components'

const Input = ({ value, placeholder, ...rest }) => {
   return (
      <StyledInput value={value} placeholder="telephone bir nerse" {...rest} />
   )
}

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
   @media only screen and (max-width: 390px) {
      max-width: 90%;
      height: 34px;
      font-size: 14px;
   }
`
