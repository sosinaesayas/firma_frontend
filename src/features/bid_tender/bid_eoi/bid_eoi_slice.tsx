import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { postEoiBidToApi } from './bid_eoi_api';

interface EoiBidState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: EoiBidState = {
  status: 'idle',
  error: null,
};

export const postEoiBidForm = createAsyncThunk(
  'eoiBid/postEoiBidForm',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await postEoiBidToApi(formData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const eoiBidSlice = createSlice({
  name: 'eoiBid',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postEoiBidForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postEoiBidForm.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(postEoiBidForm.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export default eoiBidSlice.reducer;