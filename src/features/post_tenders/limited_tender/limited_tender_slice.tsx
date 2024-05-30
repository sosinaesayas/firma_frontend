import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { postLimitedTenderToApi } from './limited_tender_api';
import { LimitedTenderData } from '../../../data/interfaces/limitedData';

interface LimitedTenderState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: LimitedTenderState = {
  status: 'idle',
  error: null,
};

export const postLimitedTenderForm = createAsyncThunk(
  'limitedTender/postLimitedTenderForm',
  async (formData: LimitedTenderData, { rejectWithValue }) => {
    try {
      const response = await postLimitedTenderToApi(formData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const limitedTenderSlice = createSlice({
  name: 'limitedTender',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postLimitedTenderForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postLimitedTenderForm.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(postLimitedTenderForm.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default limitedTenderSlice.reducer;
