import React from 'react';
import styles from './styles.module.css';
import priceIcon from '../../../../assets/excursions/price.svg';
import timeIcon from '../../../../assets/excursions/time.svg';
import { Link } from 'react-router-dom';

const OurTour = ({
  typeTour,
  title,
  verticalBG,
  desc,
  duration,
  place,
  price,
  priceForChild,
  id
}) => {
  return (
    <div className={styles.ourToursCard}>
      <div className={styles.adlerTourBg}>
        <img src={verticalBG} alt="no" />
      </div>
      <div className={styles.descriptionExcursion}>
        <div className={styles.typeOfTourExcursion}>{typeTour}</div>
        <div className={styles.placeTourExcursion}>{title} (из {place})</div>
        <div className={styles.tripTourExcursion}>
          <div className={styles.tripPrice}>
            <div className={styles.onePriceTrip}>
              <img src={priceIcon} alt="no" />
              <div className={styles.priceBiletTour}>{price}₽</div>
            </div>
            <div className={styles.ageBilet}>Взрослый билет</div>
          </div>
          <div className={styles.tripPrice}>
            <div className={styles.onePriceTrip}>
              <img src={priceIcon} alt="no" />
              <div className={styles.priceBiletTour}>{priceForChild}₽</div>
            </div>
            <div className={styles.ageBilet}>Детский билет</div>
          </div>
          <div className={styles.timeTourExcursion}>
            <div className={styles.onePriceTrip}>
              <img src={timeIcon} alt="no" />
              <div className={styles.timeDescriptionTour}>{duration} часов</div>
            </div>
          </div>
        </div>
        <div className={styles.descriptionPlaceTour}>
          <div className={styles.verticalLine}>
            <div className={styles.textPlaceTour}>
              {desc.substr(0, 200) + '...'}
            </div>
          </div>
        </div>
        <div className={styles.buttonsDescriptionTour}>
          <Link to={`/tours/${id}`}>
            <div className={styles.moreTourButton}>Подробнее</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTour;
