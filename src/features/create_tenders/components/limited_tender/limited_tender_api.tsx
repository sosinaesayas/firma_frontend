import { postRequest, getRequest } from '../../../../services/api_service';
import { LimitedTenderData } from "../../../../data/interfaces/limitedData";

export const postLimitedTenderToApi = async (form: LimitedTenderData) => {
  console.log("Sending limited tender form submission request with data:", form);
  const response = await postRequest('/admin/create-tendor', form);
  return response;
};
export const fetchCompanies = async() =>{
 
  const response = await getRequest('/admin/companies');
  return response;

}
