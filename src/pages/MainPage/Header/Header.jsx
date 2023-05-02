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
