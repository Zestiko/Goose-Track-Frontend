import { useSelector } from 'react-redux';
import { ReactComponent as BurgerMenuSvg } from '../../../images/icons/burger-menu.svg';
import { ReactComponent as DefaultAvatarSvg } from '../../../images/icons/profile-avatar-f.svg';
import { useLocation } from 'react-router-dom';


import css from './Header.module.scss';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import {
  selectorGetUserAvatar,
  selectorGetUserName,
} from 'redux/user/selectors';
import { selectTasks } from 'redux/tasks/taskSelectors';

const Header = ({ handleBurgerMenuClick, handleToggleThemeClick, theme }) => {
  const userName = useSelector(selectorGetUserName);
  const avatarPath = useSelector(selectorGetUserAvatar);
  const location = useLocation();
  const tasks = useSelector(selectTasks); 

  let title;

  if (location.pathname === '/calendar') {
    title = 'Calendar';
  } else if (location.pathname === '/account') {
    title = 'User Profile';
  } else {
    title = 'Calendar';
  }


  return (
    <div className={css.header}>
      <BurgerMenuSvg
        className={`${css.burger} ${theme}`}
        onClick={handleBurgerMenuClick}
      />
      {((tasks.length === 0) ? <h1 className={css.title}>{title}</h1> : <div className={css.blockMessage}><div className={css.img}></div>
        <div className={css.div}>
        <h1  className={css.titleTask}>{title}</h1>
        <p className={css.message}><span className={css.spanMsg}>Let go </span>of the past and focus on the present!</p>
        </div>
      </div>)}
      <div className={css.user}>
        <ThemeToggler
          className={css.themeIcon}
          handleToggleThemeClick={handleToggleThemeClick}
          theme={theme}
        />

        <p className={css.userName}>{userName}</p>
        {avatarPath === undefined ? (
          <DefaultAvatarSvg className={css.userAvatar} />
        ) : (
          <img className={css.userAvatar} src={avatarPath} alt="avatar" />
        )}
      </div>
    </div>
  );
};

export default Header;
