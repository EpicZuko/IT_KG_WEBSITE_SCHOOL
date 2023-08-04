import { createAsyncThunk } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-unresolved
import { fetchApi } from '../../lib/fetchApi'

// put worker
export const countsPutWorker = createAsyncThunk(
   'counts/putCounts',
   async (_, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: 'admin/api/plus10/worker',
         })
         setTimeout(() => {
            dispatch(countsGetRequest())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)

export const countsPutWorkerMinus = createAsyncThunk(
   'counts/putCounts',
   async (_, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: 'admin/api/minus10/worker',
         })
         setTimeout(() => {
            dispatch(countsGetRequest())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)
// put student present
export const countsPutStudentPresent = createAsyncThunk(
   'counts/putCounts',
   async (_, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: 'admin/api/plus10/present_students',
         })
         setTimeout(() => {
            dispatch(countsGetRequest())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)

export const countsPutStudentPresentMinus = createAsyncThunk(
   'counts/putCounts',
   async (_, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: 'admin/api/minus10/present_students',
         })
         setTimeout(() => {
            dispatch(countsGetRequest())
         }, 500)

         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)
// put school finish
export const countsPutFinish = createAsyncThunk(
   'counts/putCounts',
   async (_, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: 'admin/api/plus10/finish',
         })
         setTimeout(() => {
            dispatch(countsGetRequest())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)

export const countsPutFinishMinus = createAsyncThunk(
   'counts/putCounts',
   async (_, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: 'admin/api/minus10/finish',
         })
         setTimeout(() => {
            dispatch(countsGetRequest())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)

// get request
export const countsGetRequest = createAsyncThunk(
   'counts/getCounts',
   async () => {
      try {
         const response = fetchApi({
            method: 'GET',
            url: 'user/api/get/counts',
         })
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)
