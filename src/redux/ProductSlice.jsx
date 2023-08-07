//Below code is used to fetch productc from the server using async thunk

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const respons = await fetch("https://fakestoreapi.com/products");
    const data = await respons.json();
    return data;
  }
);

// product slice
const productSlice = createSlice({
  name: "Product",
  initialState,
  //below extra reducers used for redux thunk's pneding, reject and success state control
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default productSlice.reducer;
