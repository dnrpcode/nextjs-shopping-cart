import { PRODUCT_DUMMY } from "@/constants/dummy";
import { TProduct } from "@/types/productType";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ICartState {
  products: TProduct[];
}

const initialState: ICartState = {
  products: PRODUCT_DUMMY,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsState: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
    },
    updateProduct: (state, action: PayloadAction<TProduct>) => {
      const index = state.products.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.products[index] = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (obj) => obj.id !== action.payload
      );
    },
  },
});

export const { setProductsState, updateProduct, deleteProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
