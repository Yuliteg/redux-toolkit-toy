import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productList from '../data/productList.json'

export const fetchAll = createAsyncThunk('fetch-all-products', async (url) => {
 const response = await fetch(url)
 return response.json()
})

const productSlice = createSlice({
 name: 'products',
 initialState: {
  data: [],
  fetchStatus: ''
 },
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(fetchAll.fulfilled, (state, action) => {
   state.data = action.payload
   state.fetchStatus = 'success'
  })
   .addCase(fetchAll.pending, (state) => {
    state.fetchStatus = 'loading'
   })
   .addCase(fetchAll.rejected, (state) => {
    state.data = productList.products
    state.fetchStatus = 'error'
   })
 },
})

export default productSlice