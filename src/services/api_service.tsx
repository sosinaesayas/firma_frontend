import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const postRequest = async (url: string, data: any , headers ?  : string | null) => {
  const token = localStorage.getItem("token");

  const response = await api.post(url, data, {
    headers: {
      "Content-Type" : headers ?? "application/json", 
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response)
  return response;
};


export const getRequest = async (url: string) => {
  const token = localStorage.getItem("token");
  
  const response = await api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const patchRequest = async (url: string, data: any) => {
  const token = localStorage.getItem("token");
  const response = await api.patch(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}