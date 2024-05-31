import TenderTableData from "../../data/interfaces/tender";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTendersApi, purchaseTenderApi } from "./all_tenders_api";

interface CompanyTendersState {
  tenders: TenderTableData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  purchaseStatus:
    | "idle"
    | "purchasing"
    | "purchase_link_obtained"
    | "purchase_failed";
  error: string | null | undefined;
  purchaseError: string | null | undefined;
  purchaseLink: string | null | undefined;
}

const initialState: CompanyTendersState = {
  tenders: [],
  status: "idle",
  purchaseError: null,
  error: null,
  purchaseStatus: "idle",
  purchaseLink: null,
};

export const fetchTenders = createAsyncThunk("tenders/fetchTenders", async () => {
  const response = await fetchTendersApi();
  return response;
});

export const purchaseTender = createAsyncThunk("tenders/purchaseTender", async (tenderId: string) => {
  const response = await purchaseTenderApi(tenderId);
  return response;
});

const allTendersSlice = createSlice({
  name: "allTenders",
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
      })
      .addCase(purchaseTender.pending, (state) => {
        state.purchaseStatus = "purchasing";
      })
      .addCase(purchaseTender.fulfilled, (state, action) => {
        state.purchaseStatus = "purchase_link_obtained";
        state.purchaseLink = action.payload.message;
      })
      .addCase(purchaseTender.rejected, (state, action) => {
        state.purchaseStatus = "purchase_failed";
        state.purchaseError = action.error.message;
      });
  },
});

export default allTendersSlice.reducer;
