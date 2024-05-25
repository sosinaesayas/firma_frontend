import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const status = useSelector((state: RootState) => state.auth.status);
  return { user, status };
};

export default useAuth;
