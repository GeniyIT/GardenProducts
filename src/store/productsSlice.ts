import { getAllProducts } from "../utils/api";
import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice, Dispatch } from "@reduxjs/toolkit";

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
  salesProducts: IProduct[];
  currentCategoryProducts: IProduct[];
  currentProduct: IProduct | null;
}

const initialProductsState: IProductsState = {
  loading: false,
  error: null,
  products: [],
  salesProducts: [],
  currentCategoryProducts: [],
  currentProduct: null,
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

    getSalesProducts: (state) => {
      console.log(
        (state.salesProducts = state.products.filter(
          (product) => product.discont_price
        ))
      );
      state.salesProducts = state.products.filter(
        (product) => product.discont_price
      );
    },

    setCurrentProduct: (state, action: PayloadAction<number>) => {
      state.currentProduct = state.products[action.payload - 1];
    },

    setCurrentCategoryProducts: (state, action: PayloadAction<number>) => {
      console.log(`CATEGORY ID`, action);
      state.currentCategoryProducts = state.products.filter(
        (product) => product.categoryId === action.payload
      );
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  getSalesProducts,
  setCurrentProduct,
  setCurrentCategoryProducts,
} = productsSlice.actions;
export const fetchAllProducts = () => async (dispatch: Dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const productsReply = await getAllProducts();
    dispatch(fetchProductsSuccess(productsReply.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchProductsFailure("Fetch products failed"));
  }
};

export const productsReducer = productsSlice.reducer;
