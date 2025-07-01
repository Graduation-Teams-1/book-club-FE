import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface ActiveProductState {
  product: Product | null;
}

const initialState: ActiveProductState = {
  product: null,
};

const activeProductSlice = createSlice({
  name: "activeProduct",
  initialState,
  reducers: {
    setActiveProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
    clearActiveProduct: (state) => {
      state.product = null;
    },
  },
});

export const { setActiveProduct, clearActiveProduct } = activeProductSlice.actions;
export default activeProductSlice.reducer;
