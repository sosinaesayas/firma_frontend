import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/auth_slice";
import themeConfigReducer from './theme_config_slice';
import tenderTableReducer from '../features/get_tenders/tender_table_slice';
import formTenderReducer from "../features/post_tenders/public_tender/public_tender_slice";
import responseReducer from "../features/auth/company/responseSlice";
import productsReducer from "../features/post_tenders/products_form/products_form_slice";
import expressionInterestReducer from "../features/post_tenders/expression_of_interest/expression_interest_slice";
import limitedTenderReducer from "../features/post_tenders/limited_tender/limited_tender_slice";
// import directPurchaseReducer from "../features/create_tenders/components/direct_purchase/direct_purchase_slice"

import formReducer from "../features/auth/company/company_auth_slice";
import getAllTendersForCompanyReducer from "../features/all_tenders/all_tenders_slice";
import clarificationSlice from '../features/clarification/clarification_slice';

import bidTenderSlice from '../features/bid_tender/bid_all_tenders/bid_tender_slice';
import gradeFinancialDocSlice from '../features/grade_financial_doc/grade_financial_slice';
import bidExpressionOfInterestSlice from '../features/bid_tender/bid_eoi/bid_eoi_slice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    themeConfig: themeConfigReducer,
    tenderTable: tenderTableReducer,
    formTender: formTenderReducer,
    products: productsReducer,
    expressionInterest: expressionInterestReducer,
    limitedTender: limitedTenderReducer,
    form: formReducer,
    response: responseReducer,
    // directPurchase: directPurchaseReducer

    getAllTendersForCompany: getAllTendersForCompanyReducer,

   
    clarification: clarificationSlice, 
    bidTender: bidTenderSlice, 
    financialDocSlice: gradeFinancialDocSlice,
   
    bidExpressionOfInterest: bidExpressionOfInterestSlice,

  },
  middleware :  (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;