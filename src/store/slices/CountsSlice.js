import { createSlice } from '@reduxjs/toolkit'
import { countsGetRequest } from '../actions/ActionCounts'

const initialState = {
   counts: {
      presentStudent: null,
      finish: null,
      work: null,
   },
}
export const countsSlice = createSlice({
   name: 'counts',
   initialState,
   extraReducers: (builder) => {
      builder.addCase(countsGetRequest.fulfilled, (state, action) => {
         state.counts.finish = action.payload.finish
         state.counts.presentStudent = action.payload.present_students
         state.counts.work = action.payload.work
      })
   },
})

export const ActionCounts = countsSlice.actions
