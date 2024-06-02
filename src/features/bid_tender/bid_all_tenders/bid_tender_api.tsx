import { postFormDataRequestApi  , getRequest} from '../../../services/api_service';
export const postEoiBidToApi = async (form: FormData) => {
  console.log(form)
  const response = await postFormDataRequestApi('/company/bid', form);
  return response;
}

export const getTenderByIdApi = async (id: string) => {
  console.log(id);
  const response = await getRequest(`/company/get-tender-by-id?id=${id}`);
  return response;
}
