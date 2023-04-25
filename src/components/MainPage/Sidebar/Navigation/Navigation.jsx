import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

// Для теста
isActive = true;
const getActiveClassName = ({ isActive }) =>
  isActive ? 'selected' : 'unselected';

const Navigation = () => {
  //    const dispatch = useDispatch()
  //    const location = useLocation()

  //const isActiveToken
  return (
    <div>
      <div>
        <img></img>
        <p>GooseTrack</p>
      </div>
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
    </div>
  );
};

export default Navigation;
