import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOptionalToTour,
  deleteTour,
  editTour,
  editTourGallery,
  fetchTours,
} from '../../../../../redux/features/admin';
import styles from './styles.module.css';
import priceIcon from '../../../../../assets/excursions/price.svg';
import timeIcon from '../../../../../assets/excursions/time.svg';
import ticketIcon from '../../../../../assets/excursions/ticket.png';
import { motion } from "framer-motion";


const FetchTour = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTours());
    console.log(8888888888);
  }, [dispatch]);

  const tours = useSelector((state) => state.admin.tours);

  /* // { *===================== Удаление тура =========================* } // */

  function handleClickDeleteTour(id) {
    dispatch(deleteTour(id));
  }

  {
    /* // { *===================== Изменение тура =========================* } // */
  }

  const [modalEditWindowToChange, setModalEditWindowToChange] = useState(false);
  const [id, setId] = useState('');
  const [tourEdit, setTourEdit] = useState('');
  const [placeEdit, setPlaceEdit] = useState('');
  const [titleEdit, setTitleEdit] = useState('');
  const [descEdit, setDescEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');
  const [priceForChildEdit, setPriceForChildEdit] = useState('');
  const [durationEdit, setDurationEdit] = useState('');
  const [bgImageEdit, setBgImageEdit] = useState('');

  const toursEdit = useSelector((state) => state.admin.tours);

  function handleClickOpenEditTour(id) {
    setModalEditWindowToChange(!modalEditWindowToChange);
    setId(id);
    const filterToursEdit = toursEdit.find((tour) => tour._id === id);
    setTourEdit(filterToursEdit.typeTour);
    setPlaceEdit(filterToursEdit.place);
    setTitleEdit(filterToursEdit.title);
    setDescEdit(filterToursEdit.desc);
    setPriceEdit(filterToursEdit.price);
    setPriceForChildEdit(filterToursEdit.priceForChild);
    setDurationEdit(filterToursEdit.duration);
    setBgImageEdit(filterToursEdit.bgImage);
  }

  function handleChangeTourEdit(e) {
    setTourEdit(e.target.value);
  }

  function handleChangePlaceEdit(e) {
    setPlaceEdit(e.target.value);
  }

  function handleChangeTitleEdit(e) {
    setTitleEdit(e.target.value);
  }

  function handleChangeDescEdit(e) {
    setDescEdit(e.target.value);
  }

  function handleChangePriceEdit(e) {
    setPriceEdit(e.target.value);
  }

  function handleChangePriceForChildEdit(e) {
    setPriceForChildEdit(e.target.value);
  }

  function handleChangeDurationEdit(e) {
    setDurationEdit(e.target.value);
  }

  function handleChangeBgImageEdit(e) {
    setBgImageEdit(e.target.files[0]);
  }

  function handleClickEditTour() {
    dispatch(
      editTour(
        id,
        tourEdit,
        placeEdit,
        titleEdit,
        descEdit,
        bgImageEdit,
        priceEdit,
        priceForChildEdit,
        durationEdit,
      ),
      setTourEdit(''),
      setPlaceEdit(''),
      setTitleEdit(''),
      setDescEdit(''),
      setBgImageEdit(''),
      setPriceEdit(''),
      setPriceForChildEdit(''),
      setDurationEdit(''),
      setModalEditWindowToChange(false),
    );
  }

  {
    /* // { *===================== Добавление Optionals к туру =========================* } // */
  }

  const [optionalTitle, setOptionalTitle] = useState('');
  const [optionalPrice, setOptionalPrice] = useState('');
  const [idTourOptional, setIdTourOptional] = useState('');

  const [modalOptionalWindowToChange, setModalOptionalWindowToChange] =
    useState(false);

  function handleClickOpenAddOptionalToTour(optionalTourId) {
    setModalOptionalWindowToChange(!modalOptionalWindowToChange);
    setIdTourOptional(optionalTourId);
  }

  function handleChangeOptionalTitle(e) {
    setOptionalTitle(e.target.value);
  }

  function handleChangeOptionalPrice(e) {
    setOptionalPrice(e.target.value);
  }

  function handleClickAddOptionalToTour() {
    dispatch(addOptionalToTour(idTourOptional, optionalTitle, optionalPrice));
    setOptionalTitle('');
    setOptionalPrice('');
    setModalOptionalWindowToChange(false);
  }

  const handleCloseEditWindow = () => {
    setModalEditWindowToChange(false);
  };

  const handleCloseOptionalWindow = () => {
    setModalOptionalWindowToChange(false);
  };

  const toursVariants = {
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      }
    }),
    hidden: {opacity: 0, x: 400}
  };

  return (
    <>
      {/* -------------------------------------OPTIONALS- */}
      {modalOptionalWindowToChange && (
        <motion.div 
        className={styles.modalOptional}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.7,
        }}
        >
          <div className={styles.inputField}>Название места</div>
          <input
            value={optionalTitle}
            onChange={handleChangeOptionalTitle}
            type="text"
            name=""
            id=""
          />
          <div className={styles.inputField}>Цена</div>
          <input
            value={optionalPrice}
            onChange={handleChangeOptionalPrice}
            type="text"
            name=""
            id=""
          />
          <div className={styles.carouselButtonGreen}>
            <button onClick={handleClickOpenAddOptionalToTour}>Добавить</button>
          </div>
          <div
            className={styles.closeOptionalWindow}
            onClick={handleCloseOptionalWindow}
          >
            ✖
          </div>
        </motion.div>
      )}

      {/* -------------------------//EDIT--------------------------------- */}
      {modalEditWindowToChange && (
        <motion.div 
        className={styles.modalWindowEdit}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.7,
        }}
        >
          <div className={styles.inputField}>Тип тура</div>
          <input
            value={tourEdit}
            onChange={handleChangeTourEdit}
            type="text"
            name="Tour"
            placeholder="Enter tour.."
          />
          <div className={styles.inputField}>Место</div>
          <input
            value={placeEdit}
            onChange={handleChangePlaceEdit}
            type="text"
            name="Place"
            placeholder="Enter place.."
          />
          <div className={styles.inputField}>Название</div>
          <input
            value={titleEdit}
            onChange={handleChangeTitleEdit}
            type="text"
            name="Title"
            placeholder="Enter title.."
          />
          <div className={styles.inputField}>Описание</div>
          <textarea
            value={descEdit}
            onChange={handleChangeDescEdit}
            placeholder="Enter desc.."
          ></textarea>
          <div className={styles.inputField}>Цена для взрослого</div>
          <input
            value={priceEdit}
            onChange={handleChangePriceEdit}
            type="number"
            name="Price"
            placeholder="Enter price.."
          />
          <div className={styles.inputField}>Цена для ребенка</div>
          <input
            value={priceForChildEdit}
            onChange={handleChangePriceForChildEdit}
            type="number"
            name="Price for child"
            placeholder="Enter price for child.."
          />
          <div className={styles.inputField}>Длительность</div>
          <input
            value={durationEdit}
            onChange={handleChangeDurationEdit}
            type="number"
            name=""
            placeholder="Enter duration.."
          />
          <div className={styles.backgroundImage}>
            <div className={styles.inputField}>
              Изменение фонового рисунка
              <input onChange={handleChangeBgImageEdit} type="file" />
            </div>
          </div>
          <div className={styles.carouselButton}>
            <button onClick={handleClickEditTour}>Сохранить изменения</button>
          </div>
          <div
            className={styles.closeEditWindow}
            onClick={handleCloseEditWindow}
          >
            ✖
          </div>
        </motion.div>
      )}

      {/* --------------------------------------------FETCH TOURS */}
      {tours.map((tour, i) => {
        return (
          <motion.div 
          key={tour._id} 
          className={styles.tourContainer}
          variants={toursVariants}
          initial="hidden"
          animate="visible"
          custom={i}
          >
            <div className={styles.tourBlock}>
              <div className={styles.adminImage}>
                <img src={`http://localhost:3030/${tour.bgImage}`} alt="" />
              </div>
              <div className={styles.tourDesc}>
                <div className={styles.typeTour}>{tour.typeTour}</div>
                <div className={styles.titleTour}>{tour.title} ({tour.place})</div>

                <div className={styles.tripTourExcursion}>
                  <div className={styles.tripPrice}>
                    <div className={styles.onePriceTrip}>
                      <img src={priceIcon} alt="no" />
                      <div className={styles.priceBiletTour}>{tour.price}₽</div>
                    </div>
                    <div className={styles.ageBilet}>Взрослый билет</div>
                  </div>

                  <div className={styles.tripPrice}>
                    <div className={styles.onePriceTrip}>
                      <img src={priceIcon} alt="no" />
                      <div className={styles.priceBiletTour}>
                        {tour.priceForChild}₽
                      </div>
                    </div>
                    <div className={styles.ageBilet}>Детский билет</div>
                  </div>

                  <div className={styles.tripPrice}>
                    <div className={styles.onePriceTrip}>
                      <img className={styles.ticketsIcon} src={ticketIcon} alt="no" />
                      <div className={styles.priceBiletTour}>
                        {tour.tickets}
                      </div>
                    </div>
                    <div className={styles.ageBilet}>Билеты</div>
                  </div>

                  <div className={styles.timeTourExcursion}>
                    <div className={styles.onePriceTrip}>
                      <img src={timeIcon} alt="no" />
                      <div className={styles.timeDescriptionTour}>
                        {tour.duration} часов
                      </div>
                    </div>
                    <div className={styles.ageBilet}>Длительность</div>
                  </div>
                </div>
                <div className={styles.verticalLine}>
                  <div>{tour.desc.substr(0, 200) + '...'}</div>
                </div>
                <div className={styles.tourButtons}>
                  <div className={styles.carouselButtonRed}>
                    <button onClick={(e) => handleClickDeleteTour(tour._id)}>
                      Удалить
                    </button>
                  </div>
                  <div className={styles.carouselButtonBlue}>
                    <button onClick={(e) => handleClickOpenEditTour(tour._id)}>
                    Изменить
                    </button>
                  </div>

                  <div className={styles.carouselButtonGreen}>
                    <button onClick={handleClickOpenAddOptionalToTour}>
                      Доп. расходы
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default FetchTour;
