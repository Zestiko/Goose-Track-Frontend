import { useSelector } from 'react-redux';
import {
  selectorIsLoggedIn,
  selectorIsRefreshing,
  selectorGetUser,
} from 'redux/user/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  const isRefreshing = useSelector(selectorIsRefreshing);

  const user = useSelector(selectorGetUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
