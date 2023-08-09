import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/fetchApi'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

//  userAcceptance is Admin
export const AcceptanceGet = createAsyncThunk(
   'acceptance/GetAcceptance',
   async (_, { rejectWithValue }) => {
      try {
         const response = fetchApi({ url: 'admin/api/get/all' })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
// crate user acceptance
export const AcceptencePost = createAsyncThunk(
   'acceptance/postAcceptance',
   async (data, { dispatch, rejectWithValue }) => {
      try {
         const response = await fetchApi({
            url: 'user/api/create',

            method: 'POST',
            body: {
               name: data.name,
               phone_number: data.phone_number,
               text: data.text,
            },
         })

         showSuccessMessage('he he he he siuuu')
         dispatch(AcceptanceGet())

         if (!response.ok) {
            return rejectWithValue('error')
         }

         return response.json()
      } catch (err) {
         showErrorMessage('Что-то прошло не так')
         return rejectWithValue(err.message)
      }
   }
)
// Acceptance delete
export const AcceptanceDelete = createAsyncThunk(
   'acceptance/DeleteAcceptance',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = fetchApi({
            url: `admin/api/${id}`,
            method: 'DELETE',
            body: id,
         })
         showSuccessMessage('Delete Acceptance')
         setTimeout(() => {
            dispatch(AcceptanceGet())
         }, 500)
         return response
      } catch (error) {
         showErrorMessage('Что-то прошло не так')
         return rejectWithValue(error.message)
      }
   }
)
