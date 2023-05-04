import React, { useState } from 'react';
import downArrow1 from '../assets/img/downArrow1.svg';
import downArrow2 from '../assets/img/downArrow2.svg';
import styles from '../reviews/reviews.module.scss';
import {BsFillStarFill} from 'react-icons/bs';
import { data }from './reviewsData.jsx';


const Slider = () => {
const [current, setCurrent] = useState(0);

const prevSlide = () => {
    const newIndex = current === 0 ? data.length - 1 : current - 1;
    setCurrent(newIndex);
};

const nextSlide = () => {
    const newIndex = current + ((window.innerWidth >= 1280) ? 2 : 1);
    setCurrent(newIndex >= data.length ? 0 : newIndex);}

return (
    <><div className={styles.container}>
        <h2 className={styles.foot__title}>REVIEWS</h2>
        <ul className={styles.list}>
            {data.slice(
            current,
            current + Math.min(data.length - current, ((window.innerWidth >= 1280) ? 2 : 1))
        )
        .map((review, index) => (
                <li className={styles.item}>
                    <div
                        key={review.id}
                    >
                        <div className={styles.block}>
                            <img src={review.avatar} alt={review.name} className={styles.photo} />
                            <div className={styles.blockMob}>
                                <h2 className={styles.name}>{review.name}</h2>
                                <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={i < review.rating ? `${styles.starActive}` : `${styles.star}`}
                                    >
                                        <BsFillStarFill/>
                                    </span>
                                    ))}
                                </div>
                                <p className={styles.text}>{review.text}</p>
                            </div>
                        </div>
                    </div>
                </li>))}
        </ul>
        <div className={styles.icons}>
            <button className={styles.button} onClick={prevSlide}><img src={downArrow2} alt="Arrow" className={styles.icon}/></button>
            <button className={styles.button} onClick={nextSlide}><img src={downArrow1} alt="Arrow" className={styles.icon}/></button>
        </div>
    </div>
    </>
    );
};

export default Slider;
