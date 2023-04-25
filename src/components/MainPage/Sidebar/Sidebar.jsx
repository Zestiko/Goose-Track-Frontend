import Navigation from './Navigation/Navigation';
import css from './Sidebar.module.scss';
import logoImg from '../../../images/logoImg.png';

const Sidebar = () => (
  <side className={css.sidebar}>
    <div className={css.logo}>
      <img className={css.logoImg} src={logoImg}></img>
      <p className={css.logoText}>
        G<i>oo</i>seTrack
      </p>
    </div>
    <Navigation />
  </side>
);

export default Sidebar;
