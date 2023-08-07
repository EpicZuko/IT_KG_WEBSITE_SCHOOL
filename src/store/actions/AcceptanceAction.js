import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/fetchApi'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const AcceptencePost = createAsyncThunk(
   'acceptance/postAcceptance',
   async (data, { rejectWithValue }) => {
      try {
         const response = await fetchApi({
            url: 'user/api/create',
            body: data,
            method: 'POST',
         })

         showSuccessMessage('he he he he siuuu')

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
