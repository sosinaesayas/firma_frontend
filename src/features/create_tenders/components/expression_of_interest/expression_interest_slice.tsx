import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { postTenderToApi } from './expression_interest_api';
import { ExpressionInterestData } from '../../../../data/interfaces/expressionInterestData';

interface ExpressionInterestState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ExpressionInterestState = {
  status: 'idle',
  error: null,
};

export const postTenderForm = createAsyncThunk(
  'expressionInterest/postTenderForm',
  async (formData: ExpressionInterestData, { rejectWithValue }) => {
    try {
      const response = await postTenderToApi(formData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const expressionInterestSlice = createSlice({
  name: 'expressionInterest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postTenderForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postTenderForm.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(postTenderForm.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default expressionInterestSlice.reducer;
