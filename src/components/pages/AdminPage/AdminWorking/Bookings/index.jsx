import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, fetchTours } from '../../../../../redux/features/admin';
import styles from './styles.module.css';
import { fetchAllUser } from '../../../../../redux/features/user';
import peopleIcon from '../../../../../assets/another/people.png';
import dayIcon from '../../../../../assets/excursions/data.svg';
import priceIcon from '../../../../../assets/excursions/price.svg';
import { motion } from 'framer-motion';

const Bookings = () => {
  const dispatch = useDispatch();

  const tours = useSelector((state) => state.admin.tours);
  const bookings = useSelector((state) => state.admin.bookings);
  const users = useSelector((state) => state.user.users);
  console.log('tours', tours);
  console.log('users', users);
  console.log('bookings', bookings);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const toursVariants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0, x: 400 },
  };

  if (!bookings.length) {
    return <div>Забронированных туров нет</div>;
  }

  return (
    <div className={styles.bookingsPage}>
      {bookings.map((booking, index) => {
        return (
          <div>
            {users.map(user => {
              if (booking.user === user._id) {
                return (
                  <div>
                    {tours.map((tour) => {
                      if (booking.tour === tour._id) {
                        return (
                          <motion.div
                            className={styles.bookingBlock}
                            variants={toursVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                          >
                            <div className={styles.tourBG}>
                              <img
                                src={`http://localhost:3030/${tour.bgImage}`}
                                alt="bg"
                              />
                            </div>
                            <div className={styles.positionBlock}>
                              <div className={styles.userAvatar}>
                                <img
                                  src={`http://localhost:3030/${user.image}`}
                                  alt="avatar"
                                />
                              </div>
                            </div>

                            <div className={styles.bookingDesc}>
                              <div className={styles.userInfo}>
                                <div className={styles.userName}>
                                  {user.firstName} {user.lastName}
                                </div>
                                <div className={styles.userAge}>
                                  {user.age} лет
                                </div>
                              </div>

                              <div className={styles.tourInfo}>
                                <div className={styles.typeTour}>
                                  {tour.typeTour}
                                </div>
                                <div className={styles.titleTour}>
                                  {tour.title} ({tour.place})
                                </div>
                              </div>

                              <div className={styles.bookingInfo}>
                                <div className={styles.peopleCount}>
                                  <img src={peopleIcon} alt="people" />
                                  <div className={styles.count}>
                                    {booking.people} чел.
                                  </div>
                                </div>

                                <div className={styles.day}>
                                  <img
                                    className={styles.dayIcon}
                                    src={dayIcon}
                                    alt="days"
                                  />
                                  <div className={styles.count}>
                                    {booking.day} Apr
                                  </div>
                                </div>

                                <div className={styles.price}>
                                  <img src={priceIcon} alt="people" />
                                  <div className={styles.count}>
                                    {booking.total} ₽
                                  </div>
                                </div>
                              </div>

                              <div className={styles.bookingTime}>
                                {booking.timeInformation}
                              </div>
                            </div>

                            <div className={styles.archiveButton}>
                              <div className={styles.textBtn}>В архив</div>
                            </div>
                          </motion.div>
                        )
                      }
                    })}
                  </div>
                )
              }
            })}
          </div>
        )
      })}


    </div>
  );
};

export default Bookings;
