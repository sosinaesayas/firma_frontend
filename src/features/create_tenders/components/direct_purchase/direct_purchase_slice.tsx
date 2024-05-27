// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { postDirectPurchaseToApi } from '../direct_purchase/direct_purchase_api';
// import { DirectPurchaseTenderData } from "../../../../data/interfaces/directPurchaseTenderData"

// interface DirectPurchaseSliceState {
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }

// const initialState: DirectPurchaseSliceState = {
//   status: 'idle',
//   error: null,
// };

// export const postDirectPurchaseTender = createAsyncThunk(
//   'directPurchase/postDirectPurchaseTender',
//   async (formData: DirectPurchaseTenderData, { rejectWithValue }) => {
//     try {
//       const response = await postDirectPurchaseToApi(formData);
//       return response.data;
//     } catch (err: any) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const directPurchaseSlice = createSlice({
//   name: 'directPurchase',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(postDirectPurchaseTender.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(postDirectPurchaseTender.fulfilled, (state) => {
//         state.status = 'succeeded';
//       })
//       .addCase(postDirectPurchaseTender.rejected, (state, action: PayloadAction<any>) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default directPurchaseSlice.reducer;
