import { configureStore } from '@reduxjs/toolkit'
import { acceptanceSlice } from './slices/acceptanceSlice'
import { countsSlice } from './slices/CountsSlice'

export const store = configureStore({
   reducer: {
      counts: countsSlice.reducer,
      acceptance: acceptanceSlice.reducer,
   },
})
