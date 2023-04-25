import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

// Для теста
const isActive = true;
const getActiveClassName = ({ isActive }) =>
  isActive ? 'selected' : 'unselected';

const Navigation = () => {
  //    const dispatch = useDispatch()
  //    const location = useLocation()

  // const isActiveToken
  return (
      <div className="userPanel">
        {/* {isActiveToken && <h2 className="">Please SignIn</h2>} */}
        <p>User Panel</p>
        <NavLink to="" className={getActiveClassName}>
          My account
        </NavLink>
        <NavLink to="posts" end className={getActiveClassName}>
          Calendar
        </NavLink>
        <button>Log out </button>
      </div>
  );
};

export default Navigation;
