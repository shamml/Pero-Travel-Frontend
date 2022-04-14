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

const FetchTour = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTours());
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

  return (
    <>
      {/* -------------------------------------OPTIONALS- */}
      {modalOptionalWindowToChange && (
        <div className={styles.modalOptional}>
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
        </div>
      )}

      {/* -------------------------//EDIT--------------------------------- */}
      {modalEditWindowToChange && (
        <div className={styles.modalWindowEdit}>
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
        </div>
      )}

      {/* --------------------------------------------FETCH TOURS */}
      {tours.map((tour) => {
        return (
          <div key={tour._id} className={styles.tourContainer}>
            <div className={styles.tourBlock}>
              <div className={styles.adminImage}>
                <img src={`http://localhost:3030/${tour.bgImage}`} alt="" />
              </div>
              <div className={styles.tourDeskr}>
                <div>
                  <b>Категория тура:</b> {tour.typeTour}
                </div>
                <div>
                  <b>Местонахождение:</b> {tour.place}
                </div>
                <div>
                  <b>Название:</b> {tour.title}
                </div>
                <div>
                  <b>Описание:</b> {tour.desc}
                </div>
                <div>
                  <b>Всего билетов::</b> {tour.tickets}
                </div>
                <div>
                  <b>Цена:</b> {tour.price}
                </div>
                <div>
                  <b>Цена для ребенком:</b> {tour.priceForChild}₽
                </div>
                <div>
                  <b>Длительность тура:</b> {tour.duration} Д
                </div>
                <div className={styles.tourButtons}>
                  <div className={styles.carouselButtonRed}>
                    <button onClick={(e) => handleClickDeleteTour(tour._id)}>
                      DEL
                    </button>
                  </div>
                  <div className={styles.carouselButtonBlue}>
                    <button onClick={(e) => handleClickOpenEditTour(tour._id)}>
                      EDIT
                    </button>
                  </div>

                  <div className={styles.carouselButtonGreen}>
                    <button onClick={handleClickOpenAddOptionalToTour}>
                      Optionals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FetchTour;
