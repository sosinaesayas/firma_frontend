import {postRequest, getRequest} from '../../../../services/api_service';
import { TenderFormData } from "../../../../data/interfaces/tenderFormData";

export const postTenderToApi = async (form: TenderFormData) => {
 
    console.log("Sending tender form submission request with data:", form);
    const response = await postRequest('/admin/create-tendor', form);
    return response;
  }


export const fetchProducts = async() =>{
 
    const response = await getRequest('/admin/products');
    return response;
 
}
