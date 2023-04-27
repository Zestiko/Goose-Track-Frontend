import { ReactComponent as BurgerMenuSvg } from '../../../images/icons/burger-menu.svg';
import css from './Header.module.scss';

const Header = ({ header, screenWidth, handleBurgerMenuClick }) => {
  return (
    <div className={css.header}>
      <BurgerMenuSvg className={css.burger} onClick={handleBurgerMenuClick} />
      {/* {screenWidth < 769 ? (
        <BurgerMenuSvg onClick={handleBurgerMenuClick} />
      ) : (
        <div></div>
      )} */}
      <div className={css.user}>{header}</div>
    </div>
  );
};

export default Header;
