import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../store/store";
import { postTenderForm } from '../features/post_tenders/expression_of_interest/expression_interest_slice';
import { ExpressionInterestData } from "../data/interfaces/expressionInterestData";

export const useExpressionInterest = () => {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector((state: RootState) => state.expressionInterest.status);
  const error = useSelector((state: RootState) => state.expressionInterest.error);

  const submitExpressionInterest = (expressionInterestData: ExpressionInterestData) => {
    dispatch(postTenderForm(expressionInterestData));
  };

  return {
    status,
    error,
    submitExpressionInterest,
  };
};
