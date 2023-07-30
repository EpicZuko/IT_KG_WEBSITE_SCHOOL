import { createAsyncThunk } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-unresolved
import { fetchApi } from '../../lib/FetchApi'

export const countsGetRequest = createAsyncThunk(
   'counts/getCounts',
   async () => {
      try {
         const response = fetchApi({ url: '/user/api/get/counts' })
         console.log(response)
      } catch (err) {
         console.log(err)
      }
   }
)
