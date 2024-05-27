import {postRequest, getRequest} from '../../../../services/api_service';
import {  ExpressionInterestData } from "../../../../data/interfaces/expressionInterestData";

export const postTenderToApi = async (form: ExpressionInterestData) => {
 
    console.log("Sending tender form submission request with data:", form);
    const response = await postRequest('/admin/create-expression-of-interest', form);
    return response;
  }


export const fetchProducts = async() =>{
 
    const response = await getRequest('/admin/products');
    return response;
 
}
