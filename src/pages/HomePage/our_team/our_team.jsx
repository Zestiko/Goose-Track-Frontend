import styles from './team.module.scss';

import ph01 from '../assets/img/ph01.jpg';
// import ph02 from '../assets/img/ph02.jpg';
// import ph03 from '../assets/img/ph03.jpg';
// import ph04 from '../assets/img/ph04.jpg';
// import ph05 from '../assets/img/ph05.jpg';
// import ph06 from '../assets/img/ph06.jpg';
// import ph07 from '../assets/img/ph07.jpg';
// import ph09 from '../assets/img/ph09.jpg';
// import ph10 from '../assets/img/ph10.jpg';
// icons
import icoLi from '../assets/img/li.png';
import icoGi from '../assets/img/gi.png';

// Alieksieiev Vladyslav
const GitZes = 'https://github.com/Zestiko';
const LinZes = 'https://www.linkedin.com/in/vladyslav-alieksieiev/';


export const Team = ({team}) => {
    return (
<section className={styles.section}>
               
    <div className={styles.container}>            
                {team.map(({ name, role }) => (
                    <div className={styles.square}>
                        <div className={styles.box_position}>
                            <img
                                className={styles.img__style}
                              
                                src={ph01}
                                alt="team"
                            />
                            <a href={LinZes}>
                                <img
                                    className={styles.link_icon_Li}
                                    src={icoLi}
                                    alt="Icon of LinkedIn"
                                />
                            </a>
                            
                            <a href={GitZes}>
                                <img
                                    className={styles.link_icon_Gi}
                                    src={icoGi}
                                    alt="Icon of GitHub"
                                />
                            </a>
                            
                        </div>
                        <div className={styles.block__prof}>
                            <h3 className={styles.name__of}>{name}</h3>
                            <span className={styles.profession}>{role}</span>
                        </div>
                    </div>
                ))}
    </div>           
   
</section>

    );
}