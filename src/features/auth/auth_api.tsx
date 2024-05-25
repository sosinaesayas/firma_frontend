import {api} from '../../services/api_service'
interface SignupCredentials {
  email: string;
  password: string;
  phone: string;
  firstname: string;
  lastname: string;
  role: string;
}

export const signupApi = async (credentials: SignupCredentials) => {
    const response = await api.post('/auth/admin-signup', credentials);
    return response; 
};

interface LoginCredentials {
  email: string;
  password: string;
}

export const loginApi = async (credentials: LoginCredentials) => {
    const response = await api.post('/auth/login', credentials);

    if(response.status === 200){
      localStorage.setItem('token', response.data.accessToken);
    }
     return response; 
};
