import React from 'react'
import styled from 'styled-components'

const Card = ({ children, variant }) => {
   return <CardStyled variant={variant}>{children}</CardStyled>
}

export default Card

const CardStyled = styled.div`
   width: ${({ variant }) => (variant === 'priority' ? '330px' : '571px')};
   height: ${({ variant }) => (variant === 'priority' ? '280px' : '400px')};
   background: ${({ variant }) =>
      variant === 'priority' ? '#FFFFFF' : '#ffffff'};
   box-shadow: 0px 20px 30px 20px rgba(10, 82, 113, 0.1);
   border-radius: ${({ variant }) => (variant === 'priority' ? 'none' : '8px')};
   @media only screen and (max-width: 390px) {
      width: ${({ variant }) => (variant === 'priority' ? '330px' : '360px')};
      height: ${({ variant }) => (variant === 'priority' ? '280px' : '342px')};
      background: ${({ variant }) =>
         variant === 'priority' ? '#FFFFFF' : '#ffffff'};
      box-shadow: 0px 20px 30px 20px rgba(10, 82, 113, 0.1);
      border-radius: ${({ variant }) =>
         variant === 'priority' ? 'none' : '8px'};

      margin-left: ${({ variant }) =>
         variant === 'priority' ? '20px' : '7px'};
   }
`
