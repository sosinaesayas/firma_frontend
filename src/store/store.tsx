import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth_slice";
import themeConfigReducer from './theme_config_slice';
import tenderTableReducer from '../features/get_tenders/tender_table_slice';
import formTenderReducer from "../features/create_tenders/components/public_tender/public_tender_slice";
import productsReducer from "../features/create_tenders/components/products_form/products_form_slice";
import expressionInterestReducer from "../features/create_tenders/components/expression_of_interest/expression_interest_slice";
import limitedTenderReducer from "../features/create_tenders/components/limited_tender/limited_tender_slice";
// import directPurchaseReducer from "../features/create_tenders/components/direct_purchase/direct_purchase_slice"

import formReducer from "../features/auth/company/company_auth_slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    themeConfig: themeConfigReducer,
    tenderTable: tenderTableReducer,
    formTender: formTenderReducer,
    products: productsReducer,
    expressionInterest: expressionInterestReducer,
    limitedTender: limitedTenderReducer,
    // directPurchase: directPurchaseReducer,

    form: formReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;