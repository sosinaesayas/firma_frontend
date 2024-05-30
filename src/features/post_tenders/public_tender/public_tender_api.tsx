import {postRequest, getRequest} from '../../../services/api_service';
import { TenderFormData } from "../../../data/interfaces/tenderFormData";

export const postTenderToApi = async (form: TenderFormData) => {
 
    console.log("Sending tender form submission request with data:", form);
    const response = await postRequest('/admin/create-tendor', form);
    console.log(response)
    return response;
  }


export const fetchProducts = async() =>{
 
    const response = await getRequest('/admin/products');
    return response;
 
}

export const fetchCompanies = async() =>{
 
  const response = await getRequest('/admin/companies');
  return response;

}

