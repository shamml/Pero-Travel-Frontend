import React, { useEffect } from 'react'
import styles from './styles.module.css';
import cardBg from '../../../../assets/homepage/popular/cardBgOne.jpg';
import timeIcon from '../../../../assets/timeIcon.svg';
import priceIcon from '../../../../assets/priceIcon.svg';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTours } from '../../../../redux/features/tours'

const Popular = () => {
  // const array = [
  //   {
  //     id: 1,
  //     type: 'Конный тур',
  //     title: 'Конные прогулки',
  //     duration: 6,
  //     desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  //   },
  //   {
  //     id: 2,
  //     type: 'Конный тур',
  //     title: 'Конные прогулки',
  //     duration: 6,
  //     desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
  //   },
  //   {
  //     id: 3,
  //     type: 'Конный тур',
  //     title: 'Конные прогулки',
  //     duration: 6,
  //     desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  //   },
  //   {
  //     id: 4,
  //     type: 'Конный тур',
  //     title: 'Конные прогулки',
  //     duration: 6,
  //     desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
  //   },
  //   {
  //     id: 5,
  //     type: 'Конный тур',
  //     title: 'Конные прогулки',
  //     duration: 6,
  //     desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
  //   },
  // ];
  const dispatch = useDispatch()

  const tours = useSelector(state => state.tours.tours)
  // console.log(tours);

  useEffect(() => {
    dispatch(fetchTours())
  }, [dispatch])
  return (
    <div className={styles.popularBlock}>
      <div className={styles.popularTitle}>Популярные экскурсии</div>
      <div className={styles.carousel}>
        {tours.map((item) => {
          return (
            <div className={styles.carouselItem}>
              <div className={styles.cardBg}>
                <img src={cardBg} alt="pic" />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.typeOf}>{item.typeTour}</div>
                <h2 className={styles.carouselItemTitle}>{item.title}</h2>
                <div className={styles.priceAndTime}>
                  <div className={styles.time}>
                    <img src={timeIcon} alt="time" />
                    {item.duration} часов
                  </div>
                  <div className={styles.price}>
                    <img src={priceIcon} alt="price" />
                    {item.price} ₽
                  </div>
                </div>
                <p>{item.desc.substr(0, 300) + '...'}</p>
              </div>
              <NavLink to={`/tours/${item._id}`}>
                <button className={styles.moreBtn}>Подробнее</button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
