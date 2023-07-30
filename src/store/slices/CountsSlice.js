import { createSlice } from '@reduxjs/toolkit'

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
   extraReducers: {},
})

export const ActionCounts = countsSlice.actions
