import { useDispatch } from 'react-redux';
import { authLogoutThunk } from 'redux/user/user-operations';
import { Link } from 'react-router-dom';
import scss from './Logout.module.scss';

const Logout = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogoutThunk());
  };

  return (
    <>
      <h2 className={scss.buttonMeta}>Are you sure to logout?</h2>
      <ul className={scss.buttonBox}>
        <li>
          <Link to={`/welcome`} className={scss.button} onClick={handleLogout}>
            Log Out
          </Link>
        </li>
        <li>
          <button className={scss.button} onClick={onClose}>
            Cansel
          </button>
        </li>
      </ul>
    </>
  );
};

export default Logout;
