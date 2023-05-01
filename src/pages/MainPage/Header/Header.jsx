import { useSelector } from 'react-redux';
import { ReactComponent as BurgerMenuSvg } from '../../../images/icons/burger-menu.svg';
import { ReactComponent as DefaultAvatarSvg } from '../../../images/icons/profile-avatar-f.svg';

import css from './Header.module.scss';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import {
  selectorGetUserAvatar,
  selectorGetUserName,
} from 'redux/user/selectors';

const Header = ({ handleBurgerMenuClick, handleToggleThemeClick, theme }) => {
  
  const userName = useSelector(selectorGetUserName);
  const avatarPath = useSelector(selectorGetUserAvatar);

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
