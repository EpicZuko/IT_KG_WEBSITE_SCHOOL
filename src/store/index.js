import { configureStore } from '@reduxjs/toolkit'
import { countsSlice } from './slices/CountsSlice'
import { uiSlice } from './slices/uiSlice'

export const store = configureStore({
   reducer: {
      counts: countsSlice.reducer,
      uiSnackbar: uiSlice.reducer,
   },
})
