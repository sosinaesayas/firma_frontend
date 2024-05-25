import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsApi } from './products_form_api'; 

interface ProductsData {
  success: boolean;
  msg: string;
  document_category: string;
  pr_number: string;
  item: string;
  account_assignment: string;
  item_category: string;
  matnr: string;
  short_text: string;
  quantity: string;
  unit: string;
  delivery_date: string;
  material_grp: string;
  plant: string;
  storage_loc: string;
  purchasing_grp: string;
  subline_item: string;
  activity_num: string;
  sub_qty: string;
  unit_serv: string;
}

interface ProductsState {
  products: ProductsData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: null,
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNlb0BnbWFpbC5jb20iLCJyb2xlIjoiQWRtaW4tQ0VPIiwiaWF0IjoxNzE2NTA2NjI1LCJleHAiOjE3MTc4MDI2MjV9.tTB075DVxh9pCazVNIZh1x-Wx6bqtVuS3RmdnmuECcI";

export const fetchProducts = createAsyncThunk('', async () => {
  const response = await fetchProductsApi(token);
  return response;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default productsSlice.reducer;


