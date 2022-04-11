import React from 'react';
import styles from './styles.module.css';
import ex from '../../../../assets/ex.png';
import { deleteTour } from '../../../../redux/features/tours';
import { useDispatch } from 'react-redux';

const Booking = ({ tours }) => {
  const dispatch = useDispatch();

  const handleClickDeleteTour = () => {
    dispatch(deleteTour());
  };

  return (
    <div className={styles.profileOrder}>
      <div className={styles.profileOrderBlock}>
        <div className={styles.profileDatas}>
          <div className={styles.orderImg}>
            <img src={`http://localhost:3030/${tours.bgImage}`} alt="" />
          </div>
          <div className={styles.orderDesk}>
            <div className={styles.orderWrap}>
              <div className={styles.typeTour}>
                <h4>Категоря тура</h4>
                {tours.typeTour}
              </div>
              <div className={styles.tourTitle}>
                <h4>Название тура</h4>
                {tours.title}
              </div>
              <div className={styles.peopleAndPrice}>
                <div className={styles.tourCount}>
                  <h4>Всего людей</h4>5
                </div>

                <div className={styles.tourCount}>
                  <h4>Итого</h4>
                  {tours.price + tours.priceForChild} P.
                </div>
              </div>
              <div className={styles.carouselButton}>
                <button style={{ cursor: 'pointer' }}>Оставить отзыв</button>
              </div>
              <div
                onClick={handleClickDeleteTour}
                className={styles.deleteTour}
              >
                <img src={ex} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
