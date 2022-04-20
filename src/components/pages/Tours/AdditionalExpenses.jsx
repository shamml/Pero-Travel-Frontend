import React, { useEffect } from 'react';
import styles from './styles.module.css';
import circle from '../../../assets/Tours/Ellipse 17.png';
import old from '../../../assets/Tours/Rectangle 41.png';
import Frame from '../../../assets/Tours/Frame 1.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOptionals } from '../../../redux/features/optional';

const AdditionalExpenses = ({ tour }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOptionals());
  }, [dispatch]);

  const optionals = useSelector((state) => state.optional.optionals);

  return (
    <div className={styles.additionalExpenses}>
      <h1>Дополнительные расходы (по желанию)</h1>
      {optionals.map((optional) => {
        if (optional.tour === tour._id) {
          return (
            <div className={styles.additionalBlock}>
              <div className={styles.additionalPrice}>
                <div>
                  <img src={circle} alt="#" />
                </div>
                <div className={styles.coinImage}>
                  <div>
                    <img src={old} alt="#" />
                  </div>
                  <div className={styles.frame}>
                    <img src={Frame} alt="#" /> <span>{optional.price} ₽</span>
                    <div>{optional.title}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default AdditionalExpenses;
