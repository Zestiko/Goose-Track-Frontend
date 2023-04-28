import { Link } from "react-router-dom";
import { authLogoutThunk } from 'redux/auth/auth.thunk';
import {
  useDispatch,
} from 'react-redux';


export const AuthNav = () => {
    const dispatch = useDispatch();
    return (
      <div>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
        <button type="submit" onClick={()=>{dispatch(authLogoutThunk());}}>
          Log Out
        </button>
      </div>
    );
};