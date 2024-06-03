import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { postEoiBidToApi, getTenderByIdApi } from "./bid_tender_api";
import { TenderDetail } from "../../../data/interfaces/tender_detail";
import { FormDataInterface } from "../../../data/interfaces/bid_tender_form";

interface BidTenderState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  tenderDetail: TenderDetail | null;
  tenderStatus: "idle" | "loading" | "succeeded" | "failed";
  formData: FormDataInterface;
  postBidStatus: "idle" | "loading" | "succeeded" | "failed";
  postBidError: string | null | undefined;
}

const initialState: BidTenderState = {
  status: "idle",
  error: null,
  tenderDetail: null,
  
  postBidStatus: "idle",
  postBidError : null,
  tenderStatus: "idle",
  formData: {
    tenderId: "",
    deliveryTimeline: "",
    productsBid: [],
    additionalCost: [],
    passcode: "",
    technicalDocument: [],
    discount  : 0 , 
    cpoDocument: [],


  },
};

export const postBidForm = createAsyncThunk(
  "bidTender/postBidForm",
  async (formDataInterface: FormDataInterface, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("tenderId", formDataInterface.tenderId);
      formData.append("deliveryTimeline", formDataInterface.deliveryTimeline);
      formDataInterface.productsBid.forEach((product, index) => {
        formData.append(`productsBid[${index}][id]`, product.id);
        formData.append(`productsBid[${index}][price]`, product.price);
        formData.append(`productsBid[${index}][quantity]`, product.quantity);
      });
      formDataInterface.additionalCost.forEach((cost, index) => {
        formData.append(`additionalCost[${index}]`, cost.toString());
      });
      formData.append("passcode", formDataInterface.passcode);
      formDataInterface.technicalDocument.forEach((file, index) => {
        formData.append(`technicalDocument`, file);
      });

      formDataInterface.cpoDocument.forEach((file, index) => {
        formData.append(`cpoDocument`, file);
      }
      );
      formData.append("discount", formDataInterface.discount.toString());

      const response = await postEoiBidToApi(formData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTenderById = createAsyncThunk(
  "bidTender/getTenderById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await getTenderByIdApi(id);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const bidTenderSlice = createSlice({
  name: "bidTender",
  initialState,
  reducers: {
    updateProductBid: (
      state,
      action: PayloadAction<{ index: number; field: keyof FormDataInterface["productsBid"][0]; value: string }>
    ) => {
      const { index, field, value } = action.payload;
      if (!state.formData.productsBid[index]) {
        state.formData.productsBid[index] = { id: "", price: "", quantity: "" };
      }
      state.formData.productsBid[index][field] = value;
    },
    updateTenderId(state, action: PayloadAction<string>) {
      state.formData.tenderId = action.payload;
    },
    updateDeliveryTimeline(state, action: PayloadAction<string>) {
      state.formData.deliveryTimeline = action.payload;
    },
    updateAdditionalCost(state, action: PayloadAction<number[]>) {
      state.formData.additionalCost = action.payload;
    },
    updatePasscode(state, action: PayloadAction<string>) {
      state.formData.passcode = action.payload;
    },
    updateFiles(state, action: PayloadAction<File[]>) {
      state.formData.technicalDocument = action.payload;
    },
    updateDiscount(state, action: PayloadAction<number>) {
      state.formData.discount = action.payload;
    },
    updateCpoFiles(state, action: PayloadAction<File[]>) {
      state.formData.cpoDocument = action.payload;
    }, 
    updatePostBidState(state) {
      state.postBidStatus = "idle";
    }


  },
  extraReducers: (builder) => {
    builder
      .addCase(postBidForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postBidForm.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(postBidForm.rejected, (state, action: PayloadAction<any>) => {
        state.postBidStatus= "failed";
        state.postBidError= action.payload.message;
      })
      .addCase(getTenderById.pending, (state) => {
        state.tenderStatus = "loading";
      })
      .addCase(
        getTenderById.fulfilled,
        (state, action: PayloadAction<TenderDetail>) => {
          state.tenderStatus = "succeeded";
          state.tenderDetail = action.payload;
          state.formData.tenderId = action.payload.id;
          state.formData.productsBid = action.payload.products.map(product => ({
            id: product._id,
            price: "",
            quantity: "",
          }));
        }
      )
      .addCase(getTenderById.rejected, (state, action: PayloadAction<any>) => {
        state.tenderStatus = "failed";
        state.error = action.payload.message;
      });
  },
});

export const {
  updateTenderId,
  updateDeliveryTimeline,
  updateProductBid,
  updateAdditionalCost,
  updatePasscode,
  updateFiles,
  updateDiscount,
  updateCpoFiles, 
  updatePostBidState
} = bidTenderSlice.actions;

export default bidTenderSlice.reducer;
