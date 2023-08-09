import { createSlice } from '@reduxjs/toolkit'
import { AcceptanceGet } from '../actions/AcceptanceAction'

const initialState = {
   users: [],
}
export const acceptanceSlice = createSlice({
   name: 'acceptance',
   initialState,
   extraReducers: (builder) => {
      builder.addCase(AcceptanceGet.fulfilled, (state, action) => {
         console.log(action.payload)
         state.users = [...action.payload]
      })
   },
})
export const actionAcceptance = acceptanceSlice.actions
