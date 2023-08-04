import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   snackbar: { isOpen: false, message: '', severity: 'succes' },
}
export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      showSnacbar(state, action) {
         state.snackbar.isOpen = true
         state.snackbar.severity = action.payload.severity
         state.snackbar.message = action.payload.message
      },
      closeSnackbar(state) {
         state.snackbar = initialState.snackbar
      },
   },
})
export const actionsUiSlice = uiSlice.actions
