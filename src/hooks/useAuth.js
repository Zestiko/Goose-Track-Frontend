import { useSelector } from 'react-redux';
import {
  selectorIsLoggedIn,
  selectorIsRefreshing,
  selectorAuthUser,
} from 'redux/auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isRefreshing = useSelector(selectorIsRefreshing);
  const user = useSelector(selectorAuthUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
