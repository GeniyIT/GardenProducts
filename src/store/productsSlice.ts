import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  discont_price: number | null;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
}

interface IProductsState {
  loading: boolean;
  error: string | null;
  products: IProduct[];
}

const initialProductsState: IProductsState = {
  loading: false,
  error: null,
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
