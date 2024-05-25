
import { getRequest} from '../../services/api_service';
export const fetchTendersApi = async () => {

  const response = await getRequest('/admin/get-tenders');

  return response.data;
};
