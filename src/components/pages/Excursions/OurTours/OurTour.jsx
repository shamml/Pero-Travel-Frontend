import React from 'react';
import styles from './styles.module.css';
import adlerTour from '../../../../assets/excursions/adlerTour.jpg';
import price from '../../../../assets/excursions/price.svg';
import time from '../../../../assets/excursions/time.svg';
import { Link } from 'react-router-dom';

const OurTour = () => {
  return (
    <div className={styles.ourToursCard}>
      <div className={styles.adlerTourBg}>
        <img src={adlerTour} alt="no" />
      </div>
      <div className={styles.descriptionExcursion}>
        <div className={styles.typeOfTourExcursion}>Автобусный тур</div>
        <div className={styles.placeTourExcursion}>
          Золотое кольцо Абхазии (из Адлера)
        </div>
        <div className={styles.tripTourExcursion}>
          <div className={styles.tripPrice}>
            <div className={styles.onePriceTrip}>
              <img src={price} alt="no" />
              <div className={styles.priceBiletTour}>1 618₽</div>
            </div>
            <div className={styles.ageBilet}>Взрослый билет</div>
          </div>
          <div className={styles.tripPrice}>
            <div className={styles.onePriceTrip}>
              <img src={price} alt="no" />
              <div className={styles.priceBiletTour}>1 418₽</div>
            </div>
            <div className={styles.ageBilet}>Детский билет</div>
          </div>
          <div className={styles.timeTourExcursion}>
            <div className={styles.onePriceTrip}>
              <img src={time} alt="no" />
              <div className={styles.timeDescriptionTour}>2,5 часа</div>
            </div>
          </div>
        </div>
        <div className={styles.descriptionPlaceTour}>
          <div className={styles.verticalLine}>
            <div className={styles.textPlaceTour}>
              Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес
              Спринтер (20 мест). По маршруту вас будет сопровождать
              профессиональный гид. Посадка на экскурсию осуществляется с вашего
              отеля или ближайшей автобусной остановки. Пересечение границы без
              пересадок...
            </div>
          </div>
        </div>
        <div className={styles.buttonsDescriptionTour}>
          <Link to="/tours">
            <div className={styles.moreTourButton}>Подробнее</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTour;
