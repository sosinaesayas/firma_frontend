
import { getRequest , postRequest} from '../../services/api_service';
export const fetchTendersApi = async () => {

  const response = await getRequest('/company/tenders');

  return response.data;
};


export const purchaseTenderApi = async (tenderId: string) => {
  const response = await postRequest(`/company/purchase`,  {
     tenderId
  });
  return response.data;
}