import React from 'react';
import styles from './styles.module.css';
import circle from '../../../assets/Tours/Ellipse 17.png';
import old from '../../../assets/Tours/Rectangle 41.png';
import Frame from '../../../assets/Tours/Frame 1.png';
import time from '../../../assets/Tours/Layer 15.png';

const DescriptionTours = () => {
  return (
    <div className={styles.deskTripMain}>
      <div className={styles.deskBlock}>
        <h2>Описание экскурсии</h2>
        <p>
          Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер
          (20 мест). По маршруту вас будет сопровождать профессиональный гид.
          Посадка на экскурсию осуществляется с вашего отеля или ближайшей
          автобусной остановки. Пересечение границы без пересадок.
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
              <img src={Frame} alt="#" /> <span>2 000 ₽</span>
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
              <img src={Frame} alt="#" /> <span>1 500 ₽</span>
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
              <img src={time} alt="#" /> <span>12 часов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTours;
