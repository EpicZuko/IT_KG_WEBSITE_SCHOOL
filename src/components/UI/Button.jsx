import React from 'react'
import styled from 'styled-components'

const Button = ({ onClick, children, ...rest }) => {
   return (
      <StyledButton onClick={onClick} {...rest}>
         {children}
      </StyledButton>
   )
}

export default Button

const StyledButton = styled.button`
   width: 560px;
   height: 55px;
   color: #ffffff;
   border: none;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 500;
   font-size: 22px;
   line-height: 30px;
   background: #0a5271;

   box-shadow: 0px 25px 30px 20px rgba(10, 82, 113, 0.15);
   @media only screen and (max-width: 390px) {
      max-width: 90%;
      height: 55px;
      font-size: 14px;
   }
`
