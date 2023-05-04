import { useLocation } from 'react-router-dom';
import { ReactComponent as BurgerMenuSvg } from '../../../images/icons/burger-menu.svg';
import css from './Header.module.scss';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfoModal from 'components/UserInfoModal/UserInfoModal';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/taskSelectors';

const Header = ({ handleBurgerMenuClick, handleToggleThemeClick, theme }) => {
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
      {((tasks.length === 0) ? <div className={css.blockHeader}><h1 className={css.title}>{title}</h1></div> : <div className={css.blockMessage}><div className={css.img}></div>
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
        <UserInfoModal/>
      </div>
    </div>
  );
};

export default Header;
