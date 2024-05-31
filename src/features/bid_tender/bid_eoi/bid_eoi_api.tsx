import { postFormDataRequestApi } from '../../../services/api_service';
export const postEoiBidToApi = async (form: FormData) => {
  const response = await postFormDataRequestApi('/company/bid-expression-of-interest', form);
  return response;
}