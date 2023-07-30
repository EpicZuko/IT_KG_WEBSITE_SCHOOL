import { configureStore } from '@reduxjs/toolkit'
import { countsSlice } from './slices/CountsSlice'

export const store = configureStore({
   reducer: {
      counts: countsSlice.reducer,
   },
})
