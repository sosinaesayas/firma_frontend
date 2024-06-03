

import {getRequest , postRequest} from "../../services/api_service";

export const getClarificationListApi = async (tenderId: string) => {
  return getRequest(`/public/clarifications/${tenderId}`);
};

export const askClarificationApi = async (data: any) => {
  return postRequest("/company/add-clarification", data);
};

export const answerClarificationApi = async (data: any) => {
  return postRequest("/admin/add-clarification-reply", data);
};
