import { ReactComponent as BurgerMenuSvg } from '../../../images/icons/burger-menu.svg';
import { ReactComponent as DefaultAvatarSvg } from '../../../images/icons/profile-avatar-f.svg';

import css from './Header.module.scss';
import ThemeIcon from './ThemeIcon/ThemeIcon';

const Header = ({ handleBurgerMenuClick }) => {
  const userName = 'UserName'; //tmp

  const avatarPath = null;

  return (
    <div className={css.header}>
      <BurgerMenuSvg className={css.burger} onClick={handleBurgerMenuClick} />
      <div className={css.user}>
        <ThemeIcon className={css.themeIcon } />

        <p className={css.userName}>{userName}</p>
        {avatarPath === null ? (
          <DefaultAvatarSvg className={css.userAvatar} />
        ) : (
          <img className={css.userAvatar} src={avatarPath} alt="avatar" />
        )}
      </div>
    </div>
  );
};

export default Header;
