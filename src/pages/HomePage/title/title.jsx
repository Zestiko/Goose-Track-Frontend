import styles from './title.module.scss';
// Title

export const Title = ({ text }) => {
    return (
<section className={styles.section}>
       
   
        <h2 className={styles.title}>{text}</h2>
    
        
</section>

    );
}