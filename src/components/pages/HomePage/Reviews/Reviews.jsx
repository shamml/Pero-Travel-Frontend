import React, { useEffect } from 'react';
import styles from './styles.module.css';
import avatar from '../../../../assets/homepage/reviews/Rectangle26.jpg';
import kov from '../../../../assets/homepage/reviews/kov.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReview } from '../../../../redux/features/review';

const Reviews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReview());
  }, [dispatch]);

  const array = useSelector((state) => state.review.review);

  return (
    <div className={styles.reviewsBlock}>
      <div className={styles.reviewsTitle}>Отзывы</div>
      <div className={styles.carousel}>
        {array.map((item) => {
          return (
            <div className={styles.carouselItem} key={item._id}>
              <img className={styles.kov} src={kov} alt="bg" />
              <div className={styles.reviewAvatar}>
                <img src={avatar} alt="avatar" />
              </div>
              <div className={styles.reviewInfo}>
                <div className={styles.userInfo}>
                  {`${item.firstName} ${item.lastName}, ${item.age} лет`}
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
