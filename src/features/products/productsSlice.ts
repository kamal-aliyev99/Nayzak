import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'  //  for ts 
import { useEffect, useState } from "react";

export interface ProductState {
  products: object[],  // objects in array
  loading: boolean,
  error: string,
}

const initialState: ProductState = {
  products: [],  // for example  [{},{}]
  loading: true,
  error: "",
};


export const productsSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    setProductsData: (state, action) => {  // specify action type for ex-- action: PayloadAction<number>
      state.products = action.payload;
      state.loading = action.payload.loading;
    },
  },
});

export const { setProductsData } = productsSlice.actions;

export default productsSlice.reducer;
