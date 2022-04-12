import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cancelBooking } from '../../../redux/features/booking';
import { addReviewBooking } from '../../../redux/features/review';

function CardBooking() {
  const dispatch = useDispatch();

  const [reviewModalWindow, setReviewModalWindow] = useState(false);
  const [idTour, setIdTour] = useState('');
  const [text, setText] = useState('');

  const bookings = useSelector((state) => state.booking.booking);
  const tours = useSelector((state) => state.tours.tours);

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

  return (
    <div className="col-8">
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
            <div
              className="alert alert-info "
              role="alert"
              style={{ textAlign: 'center', margin: '270px 0 0' }}
            >
              У вас нет забронированных туров
            </div>
          ) : (
            <>
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
                          style={{ height: '350px' }}
                        ></img>
                      </div>
                    );
                  }
                });
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CardBooking;
