import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/fetchApi'

export const instagramLinkUpdate = createAsyncThunk(
   'instagram/putInstagram',
   async (data, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: `admin/api/update/instagram?phoneNumber=${data}`,
            body: data,
         })

         setTimeout(() => {
            dispatch(socialNetworksGet())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)
export const youtubeLinkUpdate = createAsyncThunk(
   'youtube/putYoutube',
   async (data, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: `admin/api/update/youtube?phoneNumber=${data}`,
            body: data,
         })

         setTimeout(() => {
            dispatch(socialNetworksGet())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)

export const tiktokLinkUpdate = createAsyncThunk(
   'tiktok/putTiktok',
   async (data, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: `admin/api/update/tiktok?phoneNumber=${data}`,
            body: data,
         })

         setTimeout(() => {
            dispatch(socialNetworksGet())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)

export const telegramLinkUpdate = createAsyncThunk(
   'telegram/putTelegram',
   async (data, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: `admin/api/update/telegram?phoneNumber=${data}`,
            body: data,
         })

         setTimeout(() => {
            dispatch(socialNetworksGet())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)
export const whatsappLinkUpdate = createAsyncThunk(
   'whatsapp/putwhatsapp',
   async (data, { dispatch }) => {
      try {
         const response = fetchApi({
            method: 'PUT',
            url: `admin/api/update/whatsup?phoneNumber=${data}`,
            body: data,
         })

         setTimeout(() => {
            dispatch(socialNetworksGet())
         }, 500)
         const result = await response
         return result
      } catch (err) {
         throw new Error('что-то прошло не так')
      }
   }
)

export const socialNetworksGet = createAsyncThunk(
   'social/GetSocialNetwork',
   async (_, { rejectWithValue }) => {
      try {
         const response = fetchApi({ url: 'user/api/get/all' })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
