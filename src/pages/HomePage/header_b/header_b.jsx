import styles from './header.module.scss';
import goose from '../assets/img/GOOSE_2.png';
import svgIcon from '../assets/img/Icon_arr.svg';
import { NavLink } from 'react-router-dom';
// Goose
import gooseDesk2x from '../../../images/bar/desktop/goose-1-desktop-2x.png';
import gooseMob2x from '../../../images/bar/mobile/goose-1-mobile-2x.png';
import gooseTab2x from '../../../images/bar/tablet/goose-1-tablet-2x.png';

let handleDel;

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {/* <img src={goose} alt="logo" className={styles.logo} /> */}

<picture>
<source srcset={gooseDesk2x} media="(min-width: 1200px)" type="image/jpg"/>
<source srcset={gooseTab2x} media="(min-width: 768px)" type="image/jpg"/>
<source srcset={gooseMob2x} media="(min-width: 450px)" type="image/jpg"/>

<img class="our__peoplepic" src={goose} alt="Goose"/>
</picture>     



        <h1 className={styles.main_title}>
          G<span className={styles.oo_title}>oo</span>seTrack
        </h1>

        <div className={styles.box_btn}>
          <NavLink to={'/register'}
            type="button"
            className={styles.but_SignUp}
            onClick={handleDel}
          >
            Sign up
          </NavLink>

          <NavLink to={'/login'}
            type="button"
            className={styles.but_LogIn}
            onClick={handleDel}
          >Log in
            <img className={styles.svgIcon} src={svgIcon} alt="Icon" />
          </NavLink>

          <button
            type="button"
            className={styles.but_SignUp02}
            onClick={handleDel}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
