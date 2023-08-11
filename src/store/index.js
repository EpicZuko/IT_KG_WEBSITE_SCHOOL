import { configureStore } from '@reduxjs/toolkit'
import { acceptanceSlice } from './slices/acceptanceSlice'
import { countsSlice } from './slices/CountsSlice'
import { SocilaNetworksSlice } from './slices/SocialNetworksSlice'

export const store = configureStore({
   reducer: {
      counts: countsSlice.reducer,
      acceptance: acceptanceSlice.reducer,
      network: SocilaNetworksSlice.reducer,
   },
})
