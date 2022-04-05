import React from 'react';
import styles from './styles.module.css';
import circle from '../../../assets/Tours/Ellipse 17.png';
import old from '../../../assets/Tours/Rectangle 41.png';
import Frame from '../../../assets/Tours/Frame 1.png';
import time from '../../../assets/Tours/Layer 15.png';

const DescriptionTours = ({tour}) => {
  return (
    <div className={styles.deskTripMain}>
      <div className={styles.deskBlock}>
        <h2>Описание экскурсии</h2>
        <p>
          {tour.desc}
        </p>
      </div>
      <div className={styles.tripCount}>
        <div className={styles.personCount}>
          <div>
            <img src={circle} alt="#" />
          </div>
          <div className={styles.coinImage}>
            <div>
              <img src={old} alt="#" />
            </div>
            <div className={styles.frame}>
              <img src={Frame} alt="#" /> <span>{tour.price} ₽</span>
              <div>Взрослый билет</div>
            </div>
          </div>
        </div>
        <div className={styles.personCount}>
          <div>
            <img src={circle} alt="#" />
          </div>
          <div className={styles.coinImage}>
            <div>
              <img src={old} alt="#" />
            </div>
            <div className={styles.frame}>
              <img src={Frame} alt="#" /> <span>{tour.priceForChild} ₽</span>
              <div>Детский билет</div>
            </div>
          </div>
        </div>
        <div className={styles.personCount}>
          <div>
            <img src={circle} alt="#" />
          </div>
          <div className={styles.coinImage}>
            <div>
              <img src={old} alt="#" />
            </div>
            <div className={styles.frame}>
              <img src={time} alt="#" /> <span>{tour.duration} часов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTours;
