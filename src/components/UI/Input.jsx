import React from 'react'
import styled from 'styled-components'

const Input = ({ value, placeholder, ...rest }) => {
   return <StyledInput value={value} placeholder={placeholder} {...rest} />
}

export default Input

const StyledInput = styled.input`
   outline: none;
   width: 561px;
   height: 55px;
   border: 2px solid #0a5271;
   border-radius: 3px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 19px;
   color: #828282;
   @media only screen and (max-width: 390px) {
      width: 360px;
      height: 34px;
   }
`
