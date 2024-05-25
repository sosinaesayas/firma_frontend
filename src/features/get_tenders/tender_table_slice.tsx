import TenderTableData from "../../data/interfaces/tender";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTendersApi } from "./table_tender_api";

interface TenderTableState {
  tenders: TenderTableData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: TenderTableState = {
  tenders: [],
  status: "idle",
  error: null,
};

export const fetchTenders = createAsyncThunk("", async () => {
  const response = await fetchTendersApi();
  return response;
});

const tenderTableSlice = createSlice({
  name: "tenderTable",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTenders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tenders = action.payload;
      })
      .addCase(fetchTenders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default tenderTableSlice.reducer;
