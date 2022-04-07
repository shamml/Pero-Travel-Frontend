import React, { useState } from 'react';
import styles from './styles.module.css';
import rocks from '../../../assets/Tours/rocks.png';
import reserve from '../../../assets/Tours/reserve.png';
import calImg from '../../../assets/Tours/calImg.svg';
import two from '../../../assets/Tours/two.svg';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../../../redux/features/booking';
import { useParams } from 'react-router-dom';

const BookingTour = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.application.token)

  const { id } = useParams();

  const [child, setChild] = useState('');
  const [day, setDay] = useState('');
  const [people, setPeople] = useState('');

  const [dataValue, setDataValue] = useState('');
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openSelectAdults, setOpenSelectAdults] = useState(false);
  const [openSelectKids, setOpenSelectKids] = useState(false);

  const handleOpenCalendar = () => {
    setOpenCalendar(!openCalendar);
    setOpenSelectAdults(false);
    setOpenSelectKids(false);
  };
  const handleOpenSelectAdults = () => {
    setOpenSelectAdults(!openSelectAdults);
    setOpenCalendar(false);
    setOpenSelectKids(false);
  };
  const handleOpenSelectKids = () => {
    setOpenSelectKids(!openSelectKids);
    setOpenSelectAdults(false);
    setOpenCalendar(false);
  };

  //ДОРАБОТАТЬ
  const handleBookingAdd = () => {
    dispatch(addBooking(id, day, people + child));
  };

  return (
    <div className={styles.mainReserve}>
      <div className={styles.reserveBlock}>
        <div className={styles.reserveImage}>
          <img src={rocks} alt="#" />
        </div>
        <div>
          <div className={styles.actuallyReserv}>
            <img src={reserve} alt="#" />
          </div>
          <div className={styles.termsMain}>
            <div className={styles.terms}>
              <div className={styles.date}>10 ноября 2021</div>
              <div className={styles.calImg}>
                <img onClick={handleOpenCalendar} src={calImg} alt="#" />
                {openCalendar ? (
                  <div className={styles.calendarComponent}>
                    <CalendarComponent
                    value={dataValue}
                      onChange={(e) => setDataValue(e.target.value)}
                    />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className={styles.terms}>
              <div className={styles.date}>Взрослых</div>
              <div className={styles.calImg}>
                <img onClick={handleOpenSelectAdults} src={two} alt="#" />
                {openSelectAdults ? (
                  <div className={styles.selectComponent}>
                    <select>
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className={styles.terms}>
              <div className={styles.date}>Количество детей</div>
              <div className={styles.calImg}>
                <img onClick={handleOpenSelectKids} src={two} alt="#" />
                {openSelectKids ? (
                  <div className={styles.selectComponent}>
                    <select>
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className={styles.carouselButton}>
              <button disabled={!token} onClick={handleBookingAdd}>{token ? "Забронировать" : "Зарегистрируйтесь"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTour;
