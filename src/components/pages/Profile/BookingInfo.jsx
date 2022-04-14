import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cancelBooking } from '../../../redux/features/booking';
import { addReviewBooking } from '../../../redux/features/review';
import styles from './styles.module.css';

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

  return (
    <div className={styles.bookingInfo}>
      {modalHistoryBroning ? (
        <>
          {!orders.length ? (
            <div class="alert alert-info" style={{ margin: '200px 0' }}>
              <strong>Info!</strong> На данный момент ваша история бронирования
              чиста.
            </div>
          ) : (
            <>
              {orders.map((order, index) => {
                return tours.map((tour) => {
                  if (order.tour === tour._id) {
                    return (
                      <div key={index}>
                        <div
                          class="card mb-3"
                          style={{
                            maxWidth: '100%',
                            height: '250px',
                            overflow: 'hidden',
                            opacity: '0.8',
                          }}
                        >
                          <div class="row g-0">
                            <div
                              class="col-md-4"
                              style={{
                                maxWidth: '100%',
                                height: '250px',
                                overflow: 'hidden',
                              }}
                            >
                              <img
                                src={`http://localhost:3030/${tour.bgImage}`}
                                class="img-fluid rounded-start"
                                alt="..."
                                style={{ height: '100%', width: '100%' }}
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">{tour.title}</h5>
                                <p
                                  style={{ fontSize: '14px' }}
                                  class="card-text"
                                >
                                  {tour.desc}
                                </p>
                                <p
                                  style={{ fontSize: '13px' }}
                                  class="card-text"
                                >
                                  <small class="text-muted">
                                    {order.сompletionTime}
                                  </small>
                                  <small
                                    class="text-muted"
                                    style={{
                                      display: 'block',
                                      margin: '10px 0 0',
                                    }}
                                  >
                                    На сумму {order.total}Р
                                  </small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                });
              })}
            </>
          )}
          <div
            onClick={handleClickCloseModalOrders}
            style={{
              position: 'absolute',
              right: '260px',
              bottom: '340px',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#0499DD',
              fontSize: '15px',
            }}
          >
            X
          </div>
        </>
      ) : (
        <>
          {reviewModalWindow ? (
            <>
              <form>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1" />
                  <textarea
                    value={text}
                    onChange={handleChangeText}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Введите текст.."
                  ></textarea>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '10px 0 0 ',
                  }}
                >
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
              {!bookings.length ? (
                <>
                  <div
                    class="alert alert-info"
                    style={{ margin: '200px 0 5px' }}
                  >
                    <strong>Info!</strong> На данный момент у вас нет
                    забронированных туров.
                  </div>{' '}
                  <small
                    onClick={handleClickOpenHistoryBroning}
                    style={{ cursor: 'pointer' }}
                    className="text-muted"
                  >
                    История моих бронирований
                  </small>
                </>
              ) : (
                <div>
                  {bookings.map((booking, index) => {
                    return tours.map((tour) => {
                      if (booking.tour === tour._id) {
                        return (
                          <div
                            key={index}
                            className="card"
                            style={{ margin: '0 0 10px' }}
                          >
                            <div className="card-body">
                              <h5 className="card-title">{tour.title}</h5>
                              <p className="card-text">{tour.desc}</p>
                              <p className="card-text">{tour.place}</p>
                              <p className="card-text">
                                <small className="text-muted">
                                  {booking.timeInformation}
                                </small>
                              </p>
                              <p
                                className="card-text"
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <small className="text-muted">
                                  Количество человек {booking.people}
                                </small>
                                <small
                                  className="text-muted"
                                  style={{ cursor: 'pointer' }}
                                  onClick={(e) =>
                                    handleClickOpenReviewBooking(tour._id)
                                  }
                                >
                                  Оставить отзыв
                                </small>
                              </p>
                              <p
                                className="card-text"
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <small className="text-muted">
                                  Итого {booking.total}Р
                                </small>
                                <small
                                  onClick={(e) =>
                                    handleClickCancelBooking(booking._id)
                                  }
                                  className="text-muted"
                                  style={{ cursor: 'pointer' }}
                                >
                                  Отменить бронирование
                                </small>
                              </p>
                              {/* <p class="card-text">
                        <small class="text-muted">
                          На какой день забронирован {booking.day}
                        </small>
                      </p> */}
                            </div>
                            <img
                              src={`http://localhost:3030/${tour.bgImage}`}
                              className="card-img-bottom"
                              alt="..."
                              style={{ height: '300px' }}
                            ></img>
                          </div>
                        );
                      }
                    });
                  })}
                  <small
                    onClick={handleClickOpenHistoryBroning}
                    style={{ cursor: 'pointer' }}
                    className="text-muted"
                  >
                    История моих бронирований
                  </small>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default BookingInfo;
