import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useFormTender = () => {
  const tenderForm = useSelector((state: RootState) => state.formTender.tenderForm);
  const status = useSelector((state: RootState) => state.formTender.status);
  return { tenderForm, status };
};

export default useFormTender;
