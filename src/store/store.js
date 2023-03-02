import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './createSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
})

export default store
