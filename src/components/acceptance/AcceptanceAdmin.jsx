import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const AcceptanceAdmin = () => {
   const { users } = useSelector((state) => state.acceptance)
   return (
      <Container>
         {users.map((user) => {
            return (
               <StyledCard>
                  <StyledDivName>
                     <UserName>{user.name}</UserName>
                     <StyledButton>delete</StyledButton>
                  </StyledDivName>

                  <p>{user.text}</p>
                  <PhoneNumber>Телефон номер: {user.phone_number}</PhoneNumber>
               </StyledCard>
            )
         })}
      </Container>
   )
}

export default AcceptanceAdmin
const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: space-around;
   @media (max-width: 390px) {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`
const StyledCard = styled.div`
   width: 400px;
   height: 150px;
   border-radius: 10px;
   border: 2px solid #0038ff;
   background: #fff;
   margin-top: 20px;
   overflow-y: auto;
   padding: 10px;
   font-family: 'Roboto';
   @media (max-width: 390px) {
      width: 95%;
   }
`
const UserName = styled.h2`
   font-family: 'Roboto';
   color: #0038ff;
`
const PhoneNumber = styled.p`
   margin-top: 18px;
   font-style: italic;
   font-size: 20px;
`
const StyledDivName = styled.div`
   display: flex;
   justify-content: space-between;
`
const StyledButton = styled.button`
   color: #ffffff;
   border: none;
   font-family: 'Roboto';
   font-style: normal;
   padding: 5px 15px;
   font-size: 12px;
   background: #ff0800;
   border-radius: 4px;

   box-shadow: 0px 25px 30px 20px rgba(255, 16, 16, 0.139);
`
