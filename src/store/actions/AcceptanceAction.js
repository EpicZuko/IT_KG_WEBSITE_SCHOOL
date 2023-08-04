import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/fetchApi'

export const AcceptencePost = createAsyncThunk(
   'acceptance/postAcceptance',
   async (data, { rejectWithValue }) => {
      try {
         const response = await fetchApi({
            url: 'user/api/create',
            body: data,
            method: 'POST',
         })
         console.log(response)
      } catch (err) {
         throw rejectWithValue(err.message)
      }
   }
)
