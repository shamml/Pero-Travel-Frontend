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

  // function handleClickCancelBooking(id) {
  //   dispatch(cancelBooking(id));
  // }

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
    <div className={styles.bookingInfoMain}>
      {modalHistoryBroning ? (
        <div>
          {orders.map((order) => {
            return tours.map((tour) => {
              if (order.tour === tour._id) {
                return (
                  <div className="row" style={{ margin: '0 0 15px 0' }}>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{tour.title}</h5>
                          <h6 className="card-title">{tour.typeTour}</h6>
                          <p className="card-text">{tour.desc}</p>
                          <p className="card-text">На цену {order.total}Р</p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          {order.сompletionTime}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              }
            });
          })}
          <div className={styles.historyBroning}>
            {role === 'user' ? (
              <small onClick={handleClickCloseModalOrders}>
                Вернуться назад
              </small>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          {reviewModalWindow ? (
            <>
              <form style={{ padding: '110px 0 0' }}>
                <div className="form-group" style={{ textAlign: 'center' }}>
                  <label for="exampleFormControlTextarea1" />
                  <textarea
                    value={text}
                    onChange={handleChangeText}
                    className={styles.area}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Введите текст.."
                    style={{
                      width: '600px',
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
                  <div style={{ margin: '200px 0 0' }}>
                    <strong>Info!</strong> На данный момент у вас нет
                    забронированных туров.
                  </div>{' '}
                  {/*<small*/}
                  {/*  onClick={handleClickOpenHistoryBroning}*/}
                  {/*  style={{ cursor: 'pointer' }}*/}
                  {/*>*/}
                  {/*  История моих бронирований*/}
                  {/*</small>*/}
                </>
              ) : (
                <div>
                  {bookings.map((booking, index) => {
                    return (
                      <div key={index}>
                        {users.map((user, index) => {
                          if (booking.user === user._id) {
                            return (
                              <div key={index}>
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

                                        <div className={styles.bookingDesc}>
                                          <div className={styles.tourInfo}>
                                            <div className={styles.typeTour}>
                                              {tour.typeTour}
                                            </div>
                                            <div className={styles.titleTour}>
                                              {tour.title} ({tour.place})
                                            </div>
                                          </div>

                                          <div className={styles.userInfo}>
                                            <div
                                              className={styles.verticalLine}
                                            >
                                              {tour.desc.substr(0, 170) + '...'}
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
                                            onClick={(e) =>
                                              handleClickOpenReviewBooking(
                                                tour._id,
                                              )
                                            }
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
                </div>
              )}
            </>
          )}

          <div className={styles.historyBroning}>
            {role === 'user' ? (
              <small onClick={handleClickOpenHistoryBroning}>
                История бронирований
              </small>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

export default BookingInfo;
