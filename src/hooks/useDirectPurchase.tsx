// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from "../store/store";
// import { postDirectPurchaseTender } from '../features/create_tenders/components/direct_purchase/direct_purchase_slice';
// import { DirectPurchaseTenderData } from '../data/interfaces/directPurchaseTenderData';

// export const useDirectPurchase = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const status = useSelector((state: RootState) => state.limitedTender.status);
//   const error = useSelector((state: RootState) => state.limitedTender.error);

//   const submitDirectPurchase = (directPurchaseTenderData: DirectPurchaseTenderData) => {
//     dispatch(postDirectPurchaseTender(directPurchaseTenderData));
//   };

//   return {
//     status,
//     error,
//     submitDirectPurchase,
//   };
// };
