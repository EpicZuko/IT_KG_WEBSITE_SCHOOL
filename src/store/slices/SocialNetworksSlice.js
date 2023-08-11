import { createSlice } from '@reduxjs/toolkit'
import { socialNetworksGet } from '../actions/ActionSocialNetworks'

const initialState = {
   socialLink: [],
}
export const SocilaNetworksSlice = createSlice({
   name: 'social networks',
   initialState,
   extraReducers: (builder) => {
      builder.addCase(socialNetworksGet.fulfilled, (state, action) => {
         state.socialLink = [...action.payload]
      })
   },
})
export const actionSocialNetwork = SocilaNetworksSlice.actions
