import { ReactComponent as BurgerMenuSvg } from '../../../images/icons/burger-menu.svg';
import css from './Header.module.scss';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfoModal from 'components/UserInfoModal/UserInfoModal';

const Header = ({ handleBurgerMenuClick, handleToggleThemeClick, theme }) => {
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
        <UserInfoModal/>
      </div>
    </div>
  );
};

export default Header;
