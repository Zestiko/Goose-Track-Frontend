import Navigation from './Navigation/Navigation';
import css from './Sidebar.module.css';
const Sidebar = () => (
  <side className={css.sidebar}>
    <div className={css.nav}>
      <Navigation />
    </div>
  </side>
);

export default Sidebar;
