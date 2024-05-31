import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CompanyAuthState = {
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  representativeName: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
  role: string;
  companyName: string;
  businessRegistrationNumber: string;
  businessLicenseNumber: string;
  tinNumber: string;
  vatNumber: string;
  yearOfEstablishment: string;
  servicesProvided: string;
  address: string;
  logo: File | null;
  legalDocument: File | null;
  businessLicenseNo: File | null;
  businessRegisterNo: File | null;
  vatNo: File | null;
  tinNo: File | null;
}

const initialState: CompanyAuthState = {
  isEmailVerified: false,
  isPhoneVerified: false,
  representativeName: "",
  email: "",
  phone: "",
  country: "Ethiopia",
  password: "",
  confirmPassword: "",
  role: "",
  companyName: "",
  businessRegistrationNumber: "",
  businessLicenseNumber: "",
  tinNumber: "",
  vatNumber: "",
  yearOfEstablishment: "",
  servicesProvided: "",
  address: "",
  logo: null,
  legalDocument: null,
  businessLicenseNo: null,
  businessRegisterNo: null,
  vatNo: null,
  tinNo: null,
};

const companyAuthSlice = createSlice({
  name: "companyAuth",
  initialState,
  reducers: {
    setField: (
      state: any,
      action: PayloadAction<{ field: keyof CompanyAuthState; value: any }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    setIsEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerified = action.payload;
    },
    setIsPhoneVerified: (state, action: PayloadAction<boolean>) => {
      state.isPhoneVerified = action.payload;
    },
    setFiles: (
      state,
      action: PayloadAction<{
        field: "logo" | "legalDocument" | "businessRegisterNo" | "businessLicenseNo" | "vatNo" | "tinNo";
        file: File;
      }>
    ) => {
      state[action.payload.field] = action.payload.file;
    },
  },
});

export const {
  setField,
  setIsEmailVerified,
  setIsPhoneVerified,
  setFiles,
} = companyAuthSlice.actions;

export default companyAuthSlice.reducer;
