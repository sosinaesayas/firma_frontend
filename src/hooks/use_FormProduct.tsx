import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useFormProduct = () => {
  const productForm = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  return { productForm, status };
};

export default useFormProduct;
