import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth_slice";
import themeConfigReducer from "./theme_config_slice";
import tenderTableReducer from "../features/get_tenders/tender_table_slice";
import formTenderReducer from "../features/create_tenders/components/tender_forms/tender_forms_slice";
import productsReducer from "../features/create_tenders/components/products_form/products_form_slice";
import formReducer from "../features/auth/company/company_auth_slice";
import responseReducer from "../features/auth/company/responseSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    themeConfig: themeConfigReducer,
    tenderTable: tenderTableReducer,
    formTender: formTenderReducer,
    products: productsReducer,
    form: formReducer,
    response: responseReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
