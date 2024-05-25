import { ProductsData } from '../../../../data/interfaces/productsData';
import {getRequest} from '../../../../services/api_service';
export const fetchProductsApi = async (): Promise<ProductsData[]> => {
  const response = await getRequest('/admin/products');
  return response.data;
};
