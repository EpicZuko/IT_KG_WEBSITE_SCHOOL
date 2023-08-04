import React from 'react'
import styled from 'styled-components'

const AcceptanceAdmin = ({ acceptanceData }) => {
   return (
      <Container>
         {acceptanceData.map((user) => {
            return (
               <StyledCard>
                  <h1>{user.userName}</h1>
                  <p>{user.phoneNumber}</p>
                  <p>{user.appeal}</p>
               </StyledCard>
            )
         })}
      </Container>
   )
}

export default AcceptanceAdmin
const Container = styled.div`
   display: flex;
   justify-content: center;
`
const StyledCard = styled.div`
   width: 420px;
   /* height: 60px; */
   padding-bottom: 15px;
   background-color: blueviolet;
   margin: 20px;
`
