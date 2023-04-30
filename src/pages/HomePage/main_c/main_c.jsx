import styles from './main.module.scss';
import img01 from '../assets/img/img01.png';
import img02 from '../assets/img/img02.png';
import img03 from '../assets/img/img03.png';

const alt = 'calendar';
let handle;
export const Main = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.main}>
                <li className={styles.block}>
                    <div className={styles.block__text}>
                    <h2 className={styles.block__num}>1.</h2>
                        <button
                            className={styles.block__btn}
                            type="button"
                            onClick={handle}
                        >
                            CALENDAR
                        </button>
                    <h3 className={styles.block__tl}>VIEW</h3>
                    <p className={styles.block__par}>
                        GooseTrack's Calendar view provides a
                        comprehensive overview of your schedule,
                        displaying all your tasks, events,
                        and appointments in a visually appealing and
                        intuitive layout.
                        </p>
                    </div>
                    
                    <img src={img01} alt={alt} className={styles.block_img}/>
                </li>
                <li className={styles.block_rev}>
                    <div className={styles.block__text}>
                    <h2 className={styles.block__num}>2.</h2>
                    
                    <h3 className={styles.block__tl}>SIDEBAR</h3>

                    <p className={styles.block__par}>
                            GooseTrack offers easy access to your account settings,
                            calendar, and filters. The "My Account" section allows
                            you to manage your profile information and preferences,
                            while the calendar provides a quick and convenient way
                            to view your upcoming events and tasks.
                    </p>
                    
                    </div>
                    
                    <img src={img02} alt={alt} className={styles.block_img}/>
                </li>

                <li className={styles.block}>
                    <div className={styles.block__text}>
                    <h2 className={styles.block__num}>3.</h2>
                        <button
                            type="button"
                            onClick={handle}
                            className={styles.block__btn}
                        >
                            ALL IN
                        </button>
                    <h3 className={styles.block__tl}>ONE</h3>

                    <p className={styles.block__par}>
                            GooseTrack is an all-in-one productivity tool that helps you
                            stay on top of your tasks, events, and deadlines. Say goodbye
                            to scattered to-do lists and hello to streamlined productivity
                            with GooseTrack.
                    </p>
                    </div>

                        <img src={img03} alt={alt} className={styles.block_img} />
                        
                </li>

               
                

                            

            </ul>

        </div>    
    );
    
}