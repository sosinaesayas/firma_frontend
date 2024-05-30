import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../store/store";
import { postLimitedTenderForm } from '../features/post_tenders/limited_tender/limited_tender_slice';
import { LimitedTenderData } from "../data/interfaces/limitedData";

export const useLimitedTender = () => {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector((state: RootState) => state.limitedTender.status);
  const error = useSelector((state: RootState) => state.limitedTender.error);

  const submitLimitedTender = (limitedTenderData: LimitedTenderData) => {
    dispatch(postLimitedTenderForm(limitedTenderData));
  };

  return {
    status,
    error,
    submitLimitedTender,
  };
};
