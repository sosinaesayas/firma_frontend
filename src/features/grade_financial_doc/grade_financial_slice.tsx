import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FinancialQuotation } from "../../data/interfaces/financial_doc";

import { fetchFinancialDocApi, gradeFinancialDocApi } from "./grade_financial_api";

interface GradeFinancialDocState {
  financialDoc: FinancialQuotation | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  gradeStatus: "idle" | "grading" | "graded" | "grade_failed";
  error: string | null | undefined;
  gradeError: string | null | undefined;
}

const initialState: GradeFinancialDocState = {
  financialDoc: null,
  status: "idle",
  gradeError: null,
  error: null,
  gradeStatus: "idle",
};

export const fetchFinancialDoc = createAsyncThunk("financialDoc/fetchFinancialDoc", async (bidId: string) => {
  const response = await fetchFinancialDocApi(bidId);
  return response;
});

export const gradeFinancialDoc = createAsyncThunk("financialDoc/gradeFinancialDoc", async ({bidId, grade} : {bidId: string, grade: string}) => {
  const response = await gradeFinancialDocApi(bidId, grade);
  return response;
});

const gradeFinancialDocSlice = createSlice({
  name: "gradeFinancialDoc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFinancialDoc.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFinancialDoc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.financialDoc = action.payload;
      })
      .addCase(fetchFinancialDoc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(gradeFinancialDoc.pending, (state) => {
        state.gradeStatus = "grading";
      })
      .addCase(gradeFinancialDoc.fulfilled, (state) => {
        state.gradeStatus = "graded";
      })
      .addCase(gradeFinancialDoc.rejected, (state, action) => {
        state.gradeStatus = "grade_failed";
        state.gradeError = action.error.message;
      });
  },
});

export default gradeFinancialDocSlice.reducer;
