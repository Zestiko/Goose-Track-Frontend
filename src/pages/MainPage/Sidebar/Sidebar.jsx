import Navigation from './Navigation/Navigation';
import logoImg from '../../../images/logoImg.png';
import { ReactComponent as Xclose } from '../../../images/icons/x-close.svg';

import css from './Sidebar.module.scss';

const Sidebar = ({ isSidebarOpen, handleBurgerMenuClick, theme }) => (
  <div className={`${css.sidebar} ${isSidebarOpen ? css.open : ''} ${theme}`}>
    <div className={css.logo}>
      <img className={css.logoImg} src={logoImg} alt="logoImage"></img>
      <p className={css.logoText}>
        G<i>oo</i>seTrack
      </p>
      <Xclose className={css.closeIcon} onClick={handleBurgerMenuClick} />
    </div>
    <Navigation />
  </div>
);

export default Sidebar;
