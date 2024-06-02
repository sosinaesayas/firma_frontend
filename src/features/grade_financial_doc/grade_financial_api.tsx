import { getRequest , postRequest} from '../../services/api_service';

export const fetchFinancialDocApi = async (bidId : string) => {

    const response = await getRequest(`admin//get-financial-documents/${bidId}`);
  
    return response.data;
  };
  
  
  export const gradeFinancialDocApi = async (bidId : string, grade : string) => {
    const response = await postRequest(`/admin/grade-financial-documents/${bidId}`,  {
       grade
    });
    return response.data;
  }

  