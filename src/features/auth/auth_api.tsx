import {api} from '../../services/api_service'
import { jwtDecode} from 'jwt-decode';
interface SignupCredentials {
  email: string;
  password: string;
  phone: string;
  firstname: string;
  lastname: string;
  role: string;
}

interface JwtPayload {
  role : string;
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
      const token = response.data.accessToken;
      localStorage.setItem('token', token);
      const decodedToken = jwtDecode<JwtPayload>(token);
      const { mainRole, subRole } = parseRole(decodedToken.role);
      localStorage.setItem('role', mainRole);
      localStorage.setItem('subRole', subRole ?? '');


      
    }
     return response; 
};

const parseRole = (role: string) => {
  if (role.startsWith("Admin")) {
    const [mainRole, subRole] = role.split("-");
    return { mainRole, subRole };
  }
  return { mainRole: role, subRole: null };
};
