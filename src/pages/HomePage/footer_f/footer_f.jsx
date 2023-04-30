import styles from './footer.module.scss';
import PhotoReveiw1 from '../assets/img/PhotoReveiw1.jpg';
import PhotoReveiw2 from '../assets/img/PhotoReveiw2.png';
import Stars from '../assets/img/Starts.png';
import downArrow1 from '../assets/img/downArrow1.svg';
import downArrow2 from '../assets/img/downArrow2.svg';


export const Footer = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.foot__title}>REVIEWS</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.block}>
                    <img className={styles.photo} src={PhotoReveiw1} alt="Photo2" />
                    <div className={styles.blockMob}>
                    <h1 className={styles.name}>Olena Doe</h1>
                    <img className={styles.stars} src={Stars} alt="Starts" />
                    </div>
                    </div>
                    <p className={styles.text}>GooseTrack is incredibly helpful, the sidebar with account management, calendar, and filter options make navigation seamless. Great for staying organized.</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.block}>
                        <img className={styles.photo} src={PhotoReveiw2} alt="Photo1" />
                        <div className={styles.blockMob}>
                        <h1 className={styles.name}>Alexander Hubbard</h1>
                        <img className={styles.stars} src={Stars} alt="Starts" />
                        </div>
                    </div>
                    <p className={styles.text}>GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.</p>
                </li>
            </ul>
            <div className={styles.icons}>
                <img src={downArrow2} alt="Arrow" className={styles.icon}/>
                <img src={downArrow1} alt="Arrow" className={styles.icon}/>
            </div>
        </div>
    );
}

                