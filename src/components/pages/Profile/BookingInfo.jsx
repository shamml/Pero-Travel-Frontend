import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cancelBooking } from '../../../redux/features/booking';
import { addReviewBooking } from '../../../redux/features/review';
import styles from './styles.module.css';

import peopleIcon from '../../../assets/another/people.png';
import dayIcon from '../../../assets/excursions/data.svg';
import priceIcon from '../../../assets/excursions/price.svg';
import { motion } from 'framer-motion';

function BookingInfo({
  modalHistoryBroning,
  setModalHistoryBroning,
  handleClickOpenHistoryBroning,
}) {
  const dispatch = useDispatch();

  const [reviewModalWindow, setReviewModalWindow] = useState(false);
  const [idTour, setIdTour] = useState('');
  const [text, setText] = useState('');

  const bookings = useSelector((state) => state.booking.booking);
  const tours = useSelector((state) => state.tours.tours);
  const users = useSelector((state) => state.user.users);
  const orders = useSelector((state) => state.user.orders);
  const role = useSelector((state) => state.application.role);

  function handleClickCancelBooking(id) {
    dispatch(cancelBooking(id));
  }

  function handleClickOpenReviewBooking(id) {
    setReviewModalWindow(!reviewModalWindow);
    setIdTour(id);
  }

  function handleClickCancelReviewBooking() {
    setReviewModalWindow(!reviewModalWindow);
    setIdTour('');
  }

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleClickAddReview() {
    dispatch(addReviewBooking(idTour, text));
  }

  function handleClickCloseModalOrders() {
    setModalHistoryBroning(false);
  }

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

  return (
    <div className={styles.bookingInfo}>
      {
        <>
          {reviewModalWindow ? (
            <>
              <form>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1" />
                  <textarea
                    value={text}
                    onChange={handleChangeText}
                    className={styles.area}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Введите текст.."
                    style={{
                      width: "600px"
                    }}
                  ></textarea>
                </div>
                <div className={styles.buttons}>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    disabled={!text}
                    onClick={handleClickAddReview}
                  >
                    Отправить
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    onClick={handleClickCancelReviewBooking}
                  >
                    Отменить
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              {!bookings.length && role === 'user' ? (
                <>
                  <div>
                    <strong>Info!</strong> На данный момент у вас нет
                    забронированных туров.
                  </div>{' '}
                  <small
                    onClick={handleClickOpenHistoryBroning}
                    style={{ cursor: 'pointer' }}
                  >
                    История моих бронирований
                  </small>
                </>
              ) : (
                <div>
                  {bookings.map((booking, index) => {
                    return (
                      <div>
                        {users.map((user) => {
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
                                              <img
                                                src={peopleIcon}
                                                alt="people"
                                              />
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
                                              <img
                                                src={priceIcon}
                                                alt="people"
                                              />
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
                                          <div 
                                            className={styles.textBtn}
                                            onClick={handleClickCancelReviewBooking}
                                          >
                                            Оставить отзыв
                                          </div>
                                        </div>
                                      </motion.div>
                                    );
                                  }
                                })}
                              </div>
                            );
                          }
                        })}
                      </div>
                    );
                  })}
                  {role === 'user' ? (
                    <small
                      onClick={handleClickOpenHistoryBroning}
                      style={{ cursor: 'pointer' }}
                      className="text-muted"
                    >
                      История моих бронирований
                    </small>
                  ) : (
                    ''
                  )}
                </div>
              )}
            </>
          )}
        </>
      }
    </div>
  );
}

export default BookingInfo;
