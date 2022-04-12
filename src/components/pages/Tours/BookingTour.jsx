import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import rocks from '../../../assets/Tours/rocks.png';
import reserve from '../../../assets/Tours/reserve.png';
import calImg from '../../../assets/Tours/calImg.svg';
import two from '../../../assets/Tours/two.svg';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../../../redux/features/booking';
import { useParams } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { fetchTours } from '../../../redux/features/tours';

const BookingTour = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #049add',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };

  const token = useSelector((state) => state.application.token);

  const { id } = useParams();

  const [child, setChild] = useState('');
  const [adult, setAdult] = useState('');

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

  // { ========== ************ Бронирование ************ ========== } //

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const toursBooking = useSelector((state) => state.tours.tours);
  const desiredTour = toursBooking.find((tour) => tour._id === id);

  function handleChangeChild(e) {
    setChild(e.target.value);
  }

  function handleChangeAdult(e) {
    setAdult(e.target.value);
  }

  const handleBookingAdd = () => {
    if (!id || !dataValue || !adult || !child) {
      return alert('Пожалуйста, заполните все поля');
    }
    const error = desiredTour.days.find(
      (day) => day === dataValue.getDate().toString(),
    );
    if (!error) {
      if (desiredTour.tickets >= Number(adult) + Number(child)) {
        const reCount =
          Number(adult) * desiredTour.price +
          Number(child) * desiredTour.priceForChild;
        const total = reCount.toString();
        const recalculation = Number(adult) + Number(child);
        const people = String(recalculation);
        const day = dataValue.getDate().toString();
        const timeInformation = new Date().toString();
        dispatch(addBooking(id, day, timeInformation, people, total));
        alert(`Данный тур '${desiredTour.title}', успешно забронирован!`);
        setDataValue('');
        setAdult('');
        setChild('');
        return;
      }
      return alert(`Ограниченное число билетов.
Билетов осталось: ${desiredTour.tickets}`);
    }
    return alert(
      `Дату которую вы ввели уже забронировали, пожалуйста выберите другую дату. 
Зарезервированные дни: ${desiredTour.days}.`,
    );
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
                    <select value={adult} onChange={handleChangeAdult}>
                      <option value={5}>5</option>
                      <option value={4}>4</option>
                      <option value={3}>3</option>
                      <option value={2}>2</option>
                      <option value={1}>1</option>
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
                    <select value={child} onChange={handleChangeChild}>
                      <option value={5}>5</option>
                      <option value={4}>4</option>
                      <option value={3}>3</option>
                      <option value={2}>2</option>
                      <option value={1}>1</option>
                    </select>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className={styles.carouselButton}>
              <button onClick={token ? handleBookingAdd : handleOpen}>
                Забронировать
              </button>
              <div>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Войдите или зарегестрируйтесь!
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Прежде, чем бронировать тур необходимо
                        зарегестрироваться.
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTour;
