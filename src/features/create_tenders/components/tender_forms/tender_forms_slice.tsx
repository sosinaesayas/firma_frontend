import { TenderFormData } from "../../../../data/interfaces/tenderFormData.tsx";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postTenderToApi ,fetchProducts } from "./tender_forms_api.tsx";

interface Product{
  pr_number : string, 
  short_text : string, 
  item : string
}
interface FormTenderState {
  tenderForm: TenderFormData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
  productsStatus: "idle" | "loading" | "succeeded" | "failed";
  productsError: string | null | undefined;
  products : Product[]
}

const initialState: FormTenderState = {
  tenderForm: null,
  status: "idle",
  error: null,
  productsStatus: "idle",
  productsError: null,
  products: []
};

export const postTenderForm = createAsyncThunk(
  "",
  async (form: TenderFormData, { rejectWithValue }) => {
    try {
      const response = await postTenderToApi(form);

      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchProductForTender = createAsyncThunk(
  "fetching products" , 
  async() =>{
    try{
      const response  = await fetchProducts();
      return response.data
    }catch(error){
      const errorMessage = (error as Error).message;
      console.log(errorMessage)
    }
  }


)

const formTenderSlice = createSlice({
  name: "formTender",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postTenderForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postTenderForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tenderForm = action.payload;
      })
      .addCase(postTenderForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default formTenderSlice.reducer;
