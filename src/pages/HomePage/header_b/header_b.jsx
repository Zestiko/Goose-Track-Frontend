import styles from './header.module.scss';
import goose from '../assets/img/GOOSE_2.png';
import svgIcon from '../assets/img/Icon_arr.svg';
import { NavLink } from 'react-router-dom';

let handleDel;

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={goose} alt="logo" className={styles.logo} />

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
