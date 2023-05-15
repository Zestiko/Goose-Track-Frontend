import Navigation from './Navigation/Navigation';
import logoImg from '../../../images/logoImg.png';
import { ReactComponent as Xclose } from '../../../images/icons/x-close.svg';

// Goose Retina
import gooseDesk3x from '../../../images/bar/desktop/goose-1-desktop-3x.png';
import gooseDesk2x from '../../../images/bar/desktop/goose-1-desktop-2x.png';
import gooseDesk1x from '../../../images/bar/desktop/goose-1-desktop-1x.png';

import css from './Sidebar.module.scss';

const Sidebar = ({ isSidebarOpen, handleBurgerMenuClick }) => (
  <div className={`${css.sidebar} ${isSidebarOpen ? css.open : ''}`}>
    <div className={css.logo}>
      <picture>
        <source
          srcSet={`${gooseDesk1x} 1x, ${gooseDesk2x} 2x, ${gooseDesk3x} 3x`}
          alt="Goose"
        />
        <img className={css.logoImg} src={logoImg} alt="logoImage" />
      </picture>

      <p className={css.logoText}>
        G<i>oo</i>seTrack
      </p>
      <Xclose className={css.closeIcon} onClick={handleBurgerMenuClick} />
    </div>
    <Navigation />
  </div>
);

export default Sidebar;
